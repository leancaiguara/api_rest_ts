import { Request, Response } from 'express';
import {
  deleteItemService,
  getItemIdService,
  getItemsService,
  insertItem,
  updateItemService,
} from '../services/item.service';
import { handleHttp } from '../utils/error.handle';

const getItems = async (req: Request, res: Response) => {
  try {
    const items = await getItemsService();
    res.send(items);
  } catch (error) {
    handleHttp(res, error);
  }
};

const addItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertItem(body);
    res.send(responseItem);
  } catch (error) {
    handleHttp(res, error);
  }
};

const getItemId = async ({ params }: Request, res: Response) => {
  const id: string = params.id;
  try {
    const responseItem = await getItemIdService(id);
    res.send(responseItem);
  } catch (error) {
    handleHttp(res, error);
  }
};

const updateItemId = async ({ params, body }: Request, res: Response) => {
  const id: string = params.id;
  try {
    const responseItem = await updateItemService(id, body);
    res.send(responseItem);
  } catch (error) {
    handleHttp(res, error);
  }
};

const deleteItemId = async ({ params }: Request, res: Response) => {
  const id: string = params.id;
  try {
    const responseItem = await deleteItemService(id);
    res.send(responseItem);
  } catch (error) {
    handleHttp(res, error);
  }
};

export { addItem, getItems, getItemId, updateItemId, deleteItemId };
