import connectDB from '@/lib/mongoose'; // Utility to connect to the database
import odMember from '@/models/odSchema'; // Import your Mongoose model

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
      res.status(500).json({ message: 'An error occurred.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
