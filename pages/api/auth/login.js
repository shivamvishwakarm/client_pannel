import odMember from "@/models/odSchema";
import connectDB from "@/lib/mongoose";



export default async function handler(req, res) {

  await connectDB();

  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { userName, password } = req.body;

  try {
    // find user by username and password

    const user = await odMember.findOne({customer_id: userName})

    if (!user) {
      return res.status(401).json({ message: 'Invalid user name' });
    }

    const passwordValid = password === user.password;

    if (!passwordValid) { 
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: 'Logged in successfully', user: user});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}