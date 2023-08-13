import connectDB from '@/lib/mongoose'; // Utility to connect to the database
import odMember from "@/models/odSchema";
connectDB();

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const members = await odMember.find({});
            res.status(200).json(members);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "An error occurred." });
        }
    } else {
        res.status(405).json({ message: "Method not allowed." });
    }
}




