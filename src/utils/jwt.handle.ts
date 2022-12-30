import { sign, verify } from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'bocaaa';

const generateToken = (email: string) => {
  const tokenJwt = sign({ email }, JWT_SECRET, {
    expiresIn: '2h',
  });

  return tokenJwt;
};

const verifyToken = (tokenJwt: string) => {
  const isOk = verify(tokenJwt, JWT_SECRET);

  return isOk;
};

export { generateToken, verifyToken };
