;
("use strict");
const http = require("http"),
  express = require("express"),
  cors = require('cors'),
  paths = require("../paths/paths");
const app = express()
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use("/", paths);
const server = http.createServer(app);
const port = process.env.PORT || 4000;
server.listen(port);
