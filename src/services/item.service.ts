import { Car } from '../interfaces/car.interface';
import ItemModel from '../models/item.model';

const insertItem = async (item: Car) => {
  const newItem = await ItemModel.create(item);

  return newItem;
};

const getItemsService = async () => {
  const items = await ItemModel.find();

  return items;
};

const getItemIdService = async (id: string) => {
  const car = await ItemModel.findById(id);

  return car;
};

const updateItemService = async (id: string, data: Car) => {
  const carUpdated = await ItemModel.findByIdAndUpdate(id, data, { new: true });
  return carUpdated;
};

const deleteItemService = async (id: string) => {
  const carDeleted = await ItemModel.findByIdAndDelete(id);
  return carDeleted;
};

export {
  insertItem,
  getItemsService,
  getItemIdService,
  updateItemService,
  deleteItemService,
};
