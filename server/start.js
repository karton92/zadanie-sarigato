const data = require("./data/channels.json");
const Koa = require("koa");
const getPort = require("get-port");
const cors = require("@koa/cors");
const Router = require("koa-router");
const parser = require("koa-bodyparser");

const runServer = async () => {
  const port = await getPort({ port: 3000 });

  const app = new Koa();
  const router = new Router();

  app.use(parser()).use(cors()).use(router.routes()).use(router.allowedMethods());

  router.get("/channels", (ctx) => {
    ctx.body = data;
  });

  app.listen(port, () => {
    console.log(`🚀 Server started at http://localhost:${port}/ 🚀`);
  });
};

runServer().catch(console.error);
