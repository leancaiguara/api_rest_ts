import { NextFunction, Response } from 'express';
import { RequestExtendedDataUser } from '../interfaces/reqExtended.interface';
import { verifyToken } from '../utils/jwt.handle';

const checkJwt = (
  req: RequestExtendedDataUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const tokenJwt = req.headers.authorization;
    const token = tokenJwt?.split(' ').pop();

    const dataUser = verifyToken(`${token}`);

    Object.assign(req, { user: dataUser });
    //req.user = dataUser;
    next();
  } catch (error) {
    res.status(400);
    res.send('Credential invalid');
  }
};

export { checkJwt };
