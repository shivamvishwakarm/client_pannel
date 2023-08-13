
const hardcodedUser = {
    username: 'admin',
    password: 'password',
    name: 'Rahul',
    email: 'admin@example.com',
  };


export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { userName, password } = req.body;

  try {

    if (!(userName === hardcodedUser.username)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    if (!(password === hardcodedUser.password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // const token = jwt.sign({ userId: user._id }, secretKey, {
    //     expiresIn: '1h', // Token expires in 1 hour
    //   });
    res.status(200).json({ message: 'Logged in successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}
