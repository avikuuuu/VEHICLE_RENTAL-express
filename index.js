require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const mainRouter = require("./api/routers/main");

const server = express();
const logger = morgan(
  ":method :url :status :res[content-length] - :response-time ms"
);


const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// first router
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:8080",
  ],
  allowedHeaders: "x-access-token",
  method: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
};

server.use(cors(corsOptions));
server.use(
  express.urlencoded({
    extended: true,
  })
);
server.use(express.json());
server.use(logger);
server.use(express.static("api/public/img/users"));
server.use(express.static("api/public/img/vehicles"));
server.use(mainRouter);
