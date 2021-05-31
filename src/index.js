import Koa from 'koa';
import router from './api/categories/routes.js';

const app = new Koa();

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);