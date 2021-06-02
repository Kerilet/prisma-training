import Router from 'koa-router';
import categories from './categories/routes.js';
import products from './products/routes.js';

const router = new Router();

router.use('/categories', categories.routes(), categories.allowedMethods());
router.use('/products', products.routes(), products.allowedMethods());

export default router;
