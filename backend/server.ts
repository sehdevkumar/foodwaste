import { Application } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import apiRouter from "./routes/api.ts";

const app = new Application();
const PORT = 8000;

// Logger middleware
app.use(async (ctx, next) => {
  console.log(`${ctx.request.method} ${ctx.request.url.pathname}`);
  await next();
});

// CORS middleware
app.use(async (ctx, next) => {
  ctx.response.headers.set("Access-Control-Allow-Origin", "*");
  ctx.response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  ctx.response.headers.set(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  
  if (ctx.request.method === "OPTIONS") {
    ctx.response.status = 200;
    return;
  }
  
  await next();
});

// Use API router
app.use(apiRouter.routes());
app.use(apiRouter.allowedMethods());

// Default 404 handler
app.use((ctx) => {
  ctx.response.status = 404;
  ctx.response.body = { error: "Not Found" };
});

// Start server
console.log(`Deno server running on http://localhost:${PORT}`);
await app.listen({ port: PORT });