/* eslint-disable no-console */
import Koa from 'koa';
import koaBody from 'koa-body';
import serve from 'koa-static';
import koaMount from 'koa-mount';
import router from './api/routes.js';

const app = new Koa();

app.use(koaBody({ multipart: true, uploadDir: '.' }));

app.use(koaMount('/uploads', serve('./uploads')));

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('running on http://localhost:3000');
});
