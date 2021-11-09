# HTTP

## 跨域请求方式变为 OPTIONS

- 场景:

  本地前端是跨域 get 请求, 请求里包含有自定义头部信息的复杂请求, 触发请求后浏览器会发送先后发送两个请求到服务端; (同域不会出现该问题)

- `OPTIONS`请求

  即**预检请求**，可用于检测服务器允许的 http 方法。当发起跨域请求时，由于安全原因，触发一定条件时浏览器会在正式请求之前**自动**先发起 OPTIONS 请求，即**CORS 预检请求**，服务器若接受该跨域请求，浏览器才继续发起正式请求;

  以上就是说明如果服务器接收跨域请求, 那么前后一共会发起两次请求, 一次是 options, 第二次才是实际的 get 请求

- 解决方案

  服务端设置响应头

  ```js
  if (process.env.RUN_ENV === "local") {
    app.use(async (ctx, next) => {
      ctx.set("Access-Control-Allow-Origin", "http://localhost:8080");
      ctx.set(
        "Access-Control-Allow-Headers",
        "Content-Type,context,Authenticate,appid,x-timestamp"
      );
      if (ctx.method == "OPTIONS") {
        return (ctx.body = {});
      }
      await next();
    });
  }
  ```

  - **`Access-Control-Allow-Headers`**

    用于 [preflight request](https://developer.mozilla.org/zh-CN/docs/Glossary/Preflight_request) （预检请求）中，列出了将会在正式请求的 [`Access-Control-Request-Headers`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Request-Headers) 字段中出现的首部信息。

    将前端请求头的字段写在属性值里;

  - 给第一次的预请求响应空内容, 因为该请求并无逻辑需要;
