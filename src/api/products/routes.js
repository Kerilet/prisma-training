import Router from 'koa-router';
import photos from '../photos/routes.js';
import reviews from '../reviews/routes.js';
import create from './controllers/create.js';
import del from './controllers/delete.js';
import findAll from './controllers/findAll.js';
import findOne from './controllers/findOne.js';
import update from './controllers/update.js';

const router = new Router();

router.use('/:id/photos', photos.routes(), photos.allowedMethods());
router.use('/:id/reviews', reviews.routes(), reviews.allowedMethods());

router.get('/', findAll);

router.get('/:id', findOne);

router.delete('/:id', del);

router.post('/', create);

router.put('/:id', update);

export default router;

// lembre do router.use('/categories', categories.routes(), categories.allowedMethods());
