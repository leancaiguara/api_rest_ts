import { Router } from 'express';
import {
  addItem,
  deleteItemId,
  getItemId,
  getItems,
  updateItemId,
} from '../controllers/item';
import { logMiddleware } from '../middlewares/log';
const router = Router();

router.get('/', logMiddleware, getItems);
router.get('/:id', getItemId);
router.post('/', addItem);
router.patch('/:id', updateItemId);
router.delete('/:id', deleteItemId);

export { router };
