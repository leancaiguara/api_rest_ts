import 'dotenv/config';
import { connect, set } from 'mongoose';

const DB_URI = <string>process.env.DB_URI;

const dbConnect = async (): Promise<void> => {
  try {
    set('strictQuery', true);
    await connect(DB_URI);
  } catch (error) {
    console.log('this is the error:', error);
  }
};

export default dbConnect;
