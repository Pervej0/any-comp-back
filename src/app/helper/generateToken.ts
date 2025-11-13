import { TJwtPayload } from '../interface/global.type';
import jwt, { SignOptions } from 'jsonwebtoken';

const generateToken = (payload: TJwtPayload, secret: string, expiresIn: any) => {
  const token = jwt.sign(payload, secret, {
    expiresIn,
  });
  return token;
};

export default generateToken;
