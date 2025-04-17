// Server
const express = require("express");
const cors = require("cors");
const app = express();

// Middlewares
const loggerMiddleware = require("./middlewares/logger.middleware");
const errorMiddleware = require("./middlewares/error.middleware");

// Routes
const routes = require("./routes/index");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3001",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(loggerMiddleware);
app.use(errorMiddleware);
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
