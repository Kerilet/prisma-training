import Router from 'koa-router';
import create from './controllers/categories/create';
import del from './controllers/categories/delete.js';
import findAll from './controllers/categories/findAll.js';
import findOne from './controllers/categories/findOne.js';
import update from './controllers/categories/update.js';

const router = new Router();

router.get('/categories', findAll);

router.get('/categories/:id', findOne);

router.delete('/categories/:id', del);

router.post('/categories/', create);

router.put('/categories', update);

// categories above, products (general) below

router.get('/products', findAll);

// products (general) above, products (photos) below

router.get('/categories/:id/photos', findOne);

// products (photos) above, products (reviews) below

router.get('/products/:id/reviews', findAll);

export default router;
