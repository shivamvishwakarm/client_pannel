import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI; 

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      console.log('Connected to the database.');
    }
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

export default connectDB;
