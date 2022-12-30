import { Response } from 'express';
import { RequestExtendedDataUser } from '../interfaces/reqExtended.interface';
import { getOrders } from '../services/order.service';

const getOrder = async (req: RequestExtendedDataUser, res: Response) => {
  const orders = getOrders();
  console.log('this is a test', req.user);

  res.send(orders);
};

export { getOrder };
