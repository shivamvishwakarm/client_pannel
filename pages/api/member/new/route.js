import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import streamifier from "streamifier";

import connectDB from "@/lib/mongoose"; // Import your MongoDB connection
import Member from "@/models/addMember"; // Import your Mongoose model 

dotenv.config();

// Set up Multer and Cloudinary configurations
const storage = multer.memoryStorage();
const upload = multer({ storage });
const uploadMiddleware = upload.fields([
  { name: "image1", maxCount: 1 },
  { name: "image2", maxCount: 1 },
]);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

connectDB(); // Connect to the MongoDB database

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  try {
    // Run the Multer middleware for multiple files
    await runMiddleware(req, res, uploadMiddleware);

     // Access the uploaded files using req.files
     const image1File = req.files["image1"][0];
     const image2File = req.files["image2"][0];

     console.log("image1", image1File);
     console.log("image2", image2File);

    // Upload each file to Cloudinary using a stream
    const uploadPromises = [image1File, image2File].map(async (file) => {
      return new Promise((resolve) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "demo", // Adjust the folder name as needed
          },
          (error, result) => {
            if (error) {
              console.error(error);
              return;
            }
            resolve(result);
          }
        );
        streamifier.createReadStream(file.buffer).pipe(stream);
      });
    });

    // Wait for all uploads to complete
    const uploadResults = await Promise.all(uploadPromises);

    // console.log("uploadResults: ", uploadResults);

    // Save data to MongoDB
    const newEntry = new Member({
      // ... fill in your data fields ...
      role: req.body.role,
      visible: req.body.visible,
      omt_id: req.body.omt_id,
      password: req.body.password,
      email_id: req.body.email_id,
      phone_number: req.body.phone_number,
      aadhar_no: req.body.aadhar_no,
      pan_no: req.body.pan_no,
      name_of_entrepreneur: req.body.name_of_entrepreneur,
      type_of_org: req.body.type_of_org,
      father_name: req.body.father_name,
      date_of_birth: req.body.date_of_birth,
      social_category_entrepreneur: req.body.social_category_entrepreneur,
      gender: req.body.gender,
      physically_handicapped: req.body.physically_handicapped,
      name_of_enterprise: req.body.name_of_enterprise,
      r_village: req.body.r_village,
      r_block: req.body.r_block,
      r_city: req.body.r_city,
      r_district: req.body.r_district,
      r_state: req.body.r_state,
      r_pincode: req.body.r_pincode,
      o_village: req.body.o_village,
      o_block: req.body.o_block,
      o_district: req.body.o_district,
      o_state: req.body.o_state,
      o_city: req.body.o_city,
      o_pincode: req.body.o_pincode,
      payment_received: req.body.payment_received,
      payment_awaited: req.body.payment_awaited,
      bank_name: req.body.bank_name,
      branch_name: req.body.branch_name,
      bank_ac: req.body.bank_ac,
      image1: uploadResults[0].secure_url, // Assuming image1 is uploaded first
      image2: uploadResults[1].secure_url, // Assuming image2 is uploaded second
      img1_public_id: uploadResults[0].public_id, // storing public id for deletion
      img2_public_id: uploadResults[1].public_id, // storing public id for deletion
    });

    await newEntry.save();

    res.status(200).json({ message: "Data and images saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
