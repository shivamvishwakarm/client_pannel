import odMember from "@/models/odSchema";
import connectDB from "@/lib/mongoose";
import jwt from 'jsonwebtoken';



export default async function handler(req, res) {

  await connectDB();

  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { userName, password } = req.body;

  try {
    // find user by username and password

    const user = await odMember.findOne({customer_id: userName});

    if (!user) {
      return res.status(401).json({ message: 'Invalid user name' });
    }

    const passwordValid = password === user.password;

    if (!passwordValid) { 
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Create a JWT token with user data
    // const token = jwt.sign(
    //   {
    //     userId: user._id,
    //     userName: user.customer_id,
    //     password: user.password,
    //   },
    //   'apprequirepass',
    //   { expiresIn: '1h' } // Token expires in 1 hour
    // );

    res.status(200).json({ message: 'Logged in successfully', user: user});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}