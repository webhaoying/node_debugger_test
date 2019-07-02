const Koa = import('koa');
const router = import('koa-router');
const app = new Koa();
const main = ctx => {
  ctx.response.body = ' Hello World ';
};
const welcome = ctx => {
  ctx.response.body = ' Hello World ';
};
app.use(router.get('/', main));
app.use(router.get('/:name',welcome));
app.listen(3001);
console.log('listening on port 3001');