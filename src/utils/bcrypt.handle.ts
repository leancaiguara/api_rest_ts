import { compare, hash } from 'bcrypt';

const encryptPassword = async (originalPassword: string) => {
  const passwordHash = await hash(originalPassword, 8);
  return passwordHash;
};

const verifiedPassword = async (
  password: string,
  encryptedPassword: string
) => {
  const comparisonResult = await compare(password, encryptedPassword);

  return comparisonResult;
};

export { encryptPassword, verifiedPassword };
