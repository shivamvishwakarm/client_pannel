// import connectDB from "@/lib/mongoose"; // Utility to connect to the database
// import odMember from "@/models/odSchema"; // Import your Mongoose model
// import formidable from "formidable";
// import path from "path";
// import fs from "fs";

// connectDB(); // Connect to the database

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
// const parseForm = (req, saveLocally) => {
//   const options = {};
//   if (saveLocally) {
//     options.uploadDir = path.join(process.cwd(), '/public/uploads');
//     options.multiples = true;
//     options.filename = (name, ext, path, form) => {
//       return Date.now().toString() + '-' + path.originalFilename;
//     };
//   }

//   const form = formidable(options);
//   return new Promise((resolve, reject) => {
//     form.parse(req, (err, fields, files) => {
//       if (err) return reject(err);
//       resolve({ fields, files });
//     });
//   });
// };

// const handler = async (req, res) => {
//   try {
//     const uploadFolderPath = path.join(process.cwd(), '/public/uploads');
//     await fs.mkdir(uploadFolderPath, { recursive: true });
//    const {fields, files} =  await parseForm(req, true);

//   //  console.log("image2", files.image2[0].newFilename);
//   //  console.log("files: ", files);
// const newEntry = new odMember({
//   role: fields.role ? fields.role[0] : undefined,
//   customer_id: fields.customer_id ? fields.customer_id[0] : undefined,
//   password: fields.password ? fields.password[0] : undefined,
//   bank_name: fields.bank_name ? fields.bank_name[0] : undefined,
//   branch_name: fields.branch_name ? fields.branch_name[0] : undefined,
//   bank_ac: fields.bank_ac ? fields.bank_ac[0] : undefined,
//   avialable_balance: fields.avialable_balance
//     ? fields.avialable_balance[0]
//     : undefined,
//   email_id: fields.email_id ? fields.email_id[0] : undefined,
//   phone_number: fields.phone_number ? fields.phone_number[0] : undefined,
//   aadhar_no: fields.aadhar_no ? fields.aadhar_no[0] : undefined,
//   pan_no: fields.pan_no ? fields.pan_no[0] : undefined,
//   name_of_entrepreneur: fields.name_of_entrepreneur
//     ? fields.name_of_entrepreneur[0]
//     : undefined,
//   father_name: fields.father_name ? fields.father_name[0] : undefined,
//   date_of_birth: fields.date_of_birth ? fields.date_of_birth[0] : undefined,
//   social_category_entrepreneur: fields.social_category_entrepreneur
//     ? fields.social_category_entrepreneur[0]
//     : undefined,
//   gender: fields.gender ? fields.gender[0] : undefined,
//   physically_handicapped: fields.physically_handicapped
//     ? fields.physically_handicapped[0]
//     : undefined,
//   name_of_enterprise: fields.name_of_enterprise
//     ? fields.name_of_enterprise[0]
//     : undefined,
//   type_of_org: fields.type_of_org ? fields.type_of_org[0] : undefined,
//   r_village: fields.r_village ? fields.r_village[0] : undefined,
//   r_block: fields.r_block ? fields.r_block[0] : undefined,
//   r_city: fields.r_city ? fields.r_city[0] : undefined,
//   r_district: fields.r_district ? fields.r_district[0] : undefined,
//   r_state: fields.r_state ? fields.r_state[0] : undefined,
//   r_pincode: fields.r_pincode ? fields.r_pincode[0] : undefined,
//   o_village: fields.o_village ? fields.o_village[0] : undefined,
//   o_block: fields.o_block ? fields.o_block[0] : undefined,
//   o_city: fields.o_city ? fields.o_city[0] : undefined,
//   o_district: fields.o_district ? fields.o_district[0] : undefined,
//   o_state: fields.o_state ? fields.o_state[0] : undefined,
//   o_pincode: fields.o_pincode ? fields.o_pincode[0] : undefined,
//   relationship_nominee: fields.relationship_nominee
//     ? fields.relationship_nominee[0]
//     : undefined,
//   nominee_name: fields.nominee_name ? fields.nominee_name[0] : undefined,
//   image1: files.image1[0].newFilename ? files.image1[0].newFilename : undefined,
//   image2: files.image2[0].newFilename ? files.image2[0].newFilename : undefined,
// });

//     await newEntry.save();

//     res.json({ done: 'ok' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: error });
//   }
// };

// export default handler;

import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import streamifier from "streamifier";

import connectDB from "@/lib/mongoose"; // Import your MongoDB connection
import odMember from "@/models/odSchema"; // Import your Mongoose model

dotenv.config();

// Set up Multer and Cloudinary configurations
const storage = multer.memoryStorage();
const upload = multer({ storage });
const uploadMiddleware = upload.array("image1", 2); // Upload an array of files (limit to 2)

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

    // Upload each file to Cloudinary using a stream
    const uploadPromises = req.files.map(async (file) => {
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

    // Save data to MongoDB
    const newEntry = new odMember({
      // ... fill in your data fields ...
      role: req.body.role,
      customer_id: req.body.customer_id,
      password: req.body.password,
      bank_name: req.body.bank_name,
      branch_name: req.body.branch_name,

      bank_ac: req.body.bank_ac,
      avialable_balance: req.body.avialable_balance,
      email_id: req.body.email_id,  
      phone_number: req.body.phone_number,
      aadhar_no: req.body.aadhar_no,

      pan_no: req.body.pan_no,
      name_of_entrepreneur: req.body.name_of_entrepreneur,
      father_name: req.body.father_name,
      date_of_birth: req.body.date_of_birth,
      social_category_entrepreneur: req.body.social_category_entrepreneur,

      gender: req.body.gender,
      physically_handicapped: req.body.physically_handicapped,
      name_of_enterprise: req.body.name_of_enterprise,
      type_of_org: req.body.type_of_org,

      r_village: req.body.r_village,
      r_block: req.body.r_block,
      r_city: req.body.r_city,
      r_district: req.body.r_district,
      r_state: req.body.r_state,
      r_pincode: req.body.r_pincode,

      o_village: req.body.o_village,
      o_block: req.body.o_block,
      o_city: req.body.o_city,
      o_district: req.body.o_district,
      o_state: req.body.o_state,
      o_pincode: req.body.o_pincode,

      relationship_nominee: req.body.relationship_nominee,
      nominee_name: req.body.nominee_name,

      image1: uploadResults[0].secure_url, // Assuming image1 is uploaded first
      // image2: uploadResults[1].secure_url, // Assuming image2 is uploaded second
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
