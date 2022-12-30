import { Schema, model } from 'mongoose';
import { User } from '../interfaces/user.interface';

const UserSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    descripction: { type: String, default: 'boca...boca...boca' },
  },
  { timestamps: true, versionKey: false }
);

const userModel = model('user', UserSchema);
export default userModel;
