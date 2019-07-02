const Koa = import('koa');
const router = import('koa-router');
const app = new Koa();
const main = ctx => {
  ctx.response.body = ' Hello World ';
};
