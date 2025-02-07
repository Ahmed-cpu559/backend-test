import { addProduct, allProduct, deleteProduct, getProduct, updateProduct } from './product.controller.js';
import { productValidationSchema } from './product.validation.js';
import { allowedTo } from '../../middleware/allowedTo.js';
import { protectedRoutes } from '../../middleware/protectedRoutes.js';
import { validateMiddleware } from '../../middleware/expressValidation.js';
import { Router } from 'express';

export const ProductRouter = Router();

ProductRouter.post('/', protectedRoutes, allowedTo('admin'), validateMiddleware(productValidationSchema), addProduct);
ProductRouter.get('/', protectedRoutes,allowedTo('admin','user'), allProduct);
ProductRouter.get('/:id', protectedRoutes,allowedTo('admin','user'), getProduct);
ProductRouter.delete('/:id', protectedRoutes,allowedTo('admin') ,deleteProduct);
ProductRouter.put('/:id', protectedRoutes,allowedTo('admin'), validateMiddleware(productValidationSchema), updateProduct);

