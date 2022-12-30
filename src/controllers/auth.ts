import { Request, Response } from 'express';
import { loginUser, registerNewUser } from '../services/auth.service';
import { handleHttp } from '../utils/error.handle';

const registerCtrl = async ({ body }: Request, res: Response) => {
  try {
    const responseRegister = await registerNewUser(body);
    res.send(responseRegister);
  } catch (error) {
    handleHttp(res, error);
  }
};

const loginCtrl = async ({ body }: Request, res: Response) => {
  try {
    const responseLogin = await loginUser(body);
    res.send(responseLogin);
  } catch (error) {
    handleHttp(res, error);
  }
};

export { registerCtrl, loginCtrl };
