/* eslint-disable eol-last */
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

router.get('/products/:id', findOne);

router.delete('/products/:id', del);

router.post('/products/', create);

router.put('/products', update);

// products (general) above, products (photos) below

router.get('/products/:id/photos', findOne);

router.get('/products/:id', findOne);

router.delete('/products/:id', del);

router.post('/products/', create);

router.put('/products', update);

// products (photos) above, products (reviews) below

router.get('/products/:id/reviews', findAll);

router.get('/products/:id', findOne);

router.delete('/products/:id', del);

router.post('/products/', create);

router.put('/products', update);

export default router;