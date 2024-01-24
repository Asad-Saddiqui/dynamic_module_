import mongoose from 'mongoose';

let isConnected = false;

export const connectToDatabase = async (uri: string): Promise<void> => {
  if (isConnected) {
    console.log('Already connected to the database');
    return;
  }

  try {
    await mongoose.connect(uri);

    isConnected = true;
    console.log('Connected to :' + uri);
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
};
