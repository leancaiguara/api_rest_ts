import { Auth } from '../interfaces/auth.interface';
import { User } from '../interfaces/user.interface';
import userModel from '../models/user.model';
import { encryptPassword, verifiedPassword } from '../utils/bcrypt.handle';
import { generateToken } from '../utils/jwt.handle';

const registerNewUser = async ({ password, email, name }: User) => {
  const encryptedPassword = await encryptPassword(password);
  const registerUser = await userModel.create({
    email,
    name,
    password: encryptedPassword,
  });
  return registerUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const user = await userModel.findOne({ email });
  if (!user) return 'User not found';

  const verifiedResult = await verifiedPassword(password, user.password);

  if (!verifiedResult) return 'Credential invalid';

  const tokenJwt = generateToken(user.email);

  return { message: 'Access granted', tokenJwt };
};

export { registerNewUser, loginUser };
