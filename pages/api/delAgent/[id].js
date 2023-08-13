import connectDB from '@/lib/mongoose'; // Utility to connect to the database
import Agent from "@/models/agentSchema";



export default async function handler(req, res) {
    if (req.method === "DELETE") {
        try {
            const members = await Agent.findByIdAndRemove(req.query.id);
            res.status(200).json(members);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "An error occurred." });
        }
    } else {
        res.status(405).json({ message: "Method not allowed." });
    }
}
