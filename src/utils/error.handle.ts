import { Response } from 'express';

const handleHttp = (res: Response, error: any) => {
  res.status(500);
  res.send({ messageError: error._message });
};

export { handleHttp };
