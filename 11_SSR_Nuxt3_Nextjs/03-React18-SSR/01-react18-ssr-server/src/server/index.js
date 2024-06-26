const express = require("express");
import React from "react";
import ReactDOM from "react-dom/server";
import App from "../app.jsx";
const server = express();

server.get("/", (req, res) => {
  // 就是服务器端渲染
  const AppHtmlString = ReactDOM.renderToString(<App />);
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <div id="root">
        ${AppHtmlString}
      </div>
    </body>
    </html>
  `);
});

server.listen(8080, () => {
  console.log("server start on 8080");
});
