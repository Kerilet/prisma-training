import Koa from 'koa';
import koaBody from 'koa-body';
import router from './api/routes.js';

const app = new Koa();

app.use(koaBody());

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('running on http://localhost:3000');
});
