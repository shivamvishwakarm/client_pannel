import connectDB from '@/lib/mongoose'; // Utility to connect to the database
import odMember from "@/models/odSchema";



export default async function handler(req, res) {
    if (req.method === "DELETE") {
        try {
            const members = await odMember.findByIdAndRemove(req.query.id);
            res.status(200).json(members);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "An error occurred." });
        }
    } else {
        res.status(405).json({ message: "Method not allowed." });
    }
}
