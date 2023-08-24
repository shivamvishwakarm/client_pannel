import connectDB from "@/lib/mongoose"; // Utility to connect to the database
import odMember from "@/models/odSchema"; // Import your Mongoose model
import formidable from "formidable";
import path from "path";
import fs from "fs";

connectDB(); // Connect to the database

export const config = {
  api: {
    bodyParser: false,
  },
};
const parseForm = (req, saveLocally) => {
  const options = {};
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), '/public/uploads');
    options.filename = (name, ext, path, form) => {
      return Date.now().toString() + '-' + path.originalFilename;
    };
  }

  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });
};

const handler = async (req, res) => {
  try {
    const uploadFolderPath = path.join(process.cwd(), '/public/uploads');
    await fs.mkdir(uploadFolderPath, { recursive: true });
   const {fields, files} =  await parseForm(req, true);

  //  console.log("image1", files.image1[0].newFilename);
   console.log("fields: ", fields);
    const newEntry = new odMember({
      role: fields.role ? fields.role[0] : undefined,
      customer_id: fields.customer_id ? fields.customer_id[0] : undefined,
      password: fields.password ? fields.password[0] : undefined,
      bank_name: fields.bank_name ? fields.bank_name[0] : undefined,
      branch_name: fields.branch_name ? fields.branch_name[0] : undefined,
      bank_ac: fields.bank_ac ? fields.bank_ac[0] : undefined,
      avialable_balance: fields.avialable_balance ? fields.avialable_balance[0] : undefined,
      email_id: fields.email_id  ? fields.email_id[0] : undefined,
      phone_number: fields.phone_number ? fields.phone_number[0] : undefined,
      aadhar_no: fields.aadhar_no ? fields.aadhar_no[0] : undefined,
      pan_no: fields.pan_no ? fields.pan_no[0] : undefined,
      name_of_entrepreneur: fields.name_of_entrepreneur ? fields.name_of_entrepreneur[0] : undefined,
      father_name: fields.father_name ? fields.father_name[0] : undefined,
      date_of_birth: fields.date_of_birth ? fields.date_of_birth[0] : undefined,
      social_category_entrepreneur: fields.social_category_entrepreneur ? fields.social_category_entrepreneur[0] : undefined,
      gender: fields.gender ? fields.gender[0] : undefined,
      physically_handicapped: fields.physically_handicapped ? fields.physically_handicapped[0] : undefined,
      name_of_enterprise: fields.name_of_enterprise ? fields.name_of_enterprise[0] : undefined,
      type_of_org: fields.type_of_org ? fields.type_of_org[0] : undefined,
      r_village: fields.r_village ? fields.r_village[0] : undefined,
      r_block: fields.r_block ? fields.r_block[0] : undefined,
      r_city: fields.r_city ? fields.r_city[0] : undefined,
      r_district: fields.r_district ? fields.r_district[0] : undefined,
      r_state: fields.r_state ? fields.r_state[0] : undefined,
      r_pincode: fields.r_pincode ? fields.r_pincode[0] : undefined,
      o_village: fields.o_village ? fields.o_village[0] : undefined,
      o_block: fields.o_block ? fields.o_block[0] : undefined,
      o_city: fields.o_city ? fields.o_city[0] : undefined,
      o_district: fields.o_district ? fields.o_district[0] : undefined,
      o_state: fields.o_state ? fields.o_state[0] : undefined,
      o_pincode: fields.o_pincode ? fields.o_pincode[0] : undefined,
      relationship_nominee: fields.relationship_nominee ? fields.relationship_nominee[0] : undefined,
      nominee_name: fields.nominee_name ? fields.nominee_name[0] : undefined,
      image1: files.image1[0].newFilename ? files.image1[0].newFilename : undefined, 
    });

    await newEntry.save();


    res.json({ done: 'ok' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred.' });
  }
};

export default handler;























// working code with without image upload

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       const newEntry = req.body;
//       // Create a new document in the database using your Mongoose model
//       const result = await AddMemeber.create(newEntry);
//       res.status(201).json(result);
//       res.status(201).json({ message: 'Data submitted successfully.'});
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: error.message});
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed.' });
//   }
// }
