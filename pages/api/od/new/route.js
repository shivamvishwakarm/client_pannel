// import path from "path";
// import connectDB from "@/lib/mongoose";
import odMember from "@/models/odSchema";
// import multer from "multer";
// import { createHandler } from 'next-connect';

// connectDB();

// const storage = multer.diskStorage({
//   destination: path.join(process.cwd(), "public/uploads"),
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + "-" + uniqueSuffix);
//   },
// });

// console.log("storage", storage.destination);

// const upload = multer({ storage: storage });

// const apiRoute = createHandler()
//   .use(upload.fields([{ name: "image1" }, { name: "image2" }]))
//   .post(async (req, res) => {
//     try {
//       // Extract fields from req.body
//       const newEntry = {
//         ...req.body,
//         image1: req.files["image1"] ? req.files["image1"][0].path : null,
//         image2: req.files["image2"] ? req.files["image2"][0].path : null,
//       };

//       // Create new entry in the database
//       const result = await odMember.create(newEntry);

//       res.status(201).json(result);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "An error occurred." });
//     }
//   });

// export default apiRoute;
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };



import connectDB from '@/lib/mongoose'; // Utility to connect to the database

connectDB();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const newEntry = req.body; 
      // Create a new document in the database using your Mongoose model
      const result = await odMember.create(newEntry);
      res.status(201).json(result);
      res.status(201).json({ message: 'Data submitted successfully.'});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message});
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
