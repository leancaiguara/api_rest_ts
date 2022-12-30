import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface RequestExtendedDataUser extends Request {
  user?: string | JwtPayload;
}
