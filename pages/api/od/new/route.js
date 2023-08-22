import path from "path";
import connectDB from "@/lib/mongoose";
import odMember from "@/models/odSchema";
import multer from "multer";
import { createRouter } from 'next-connect';

connectDB();

const storage = multer.diskStorage({
  destination: path.join(process.cwd(), "public/uploads"),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

const apiRoute = createRouter()
  .use(upload.fields([{ name: "image1" }, { name: "image2" }]))
  .post(async (req, res) => {
    try {
      // Extract fields from req.body
      const newEntry = {
        ...req.body,
        image1: req.files["image1"] ? req.files["image1"][0].path : null,
        image2: req.files["image2"] ? req.files["image2"][0].path : null,
      };

      // Create new entry in the database
      const result = await odMember.create(newEntry);

      res.status(201).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred." });
    }
  });

module.exports = apiRoute;
module.exports.config = {
  api: {
    bodyParser: false,
  },
};
