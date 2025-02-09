const { Server } = require("socket.io");
const express = require("express");
const http = require("http");
const cors = require("cors");
const connectDB = require("./config/connect.database");
const routes = require("./routes");
const app = express();
const server = http.createServer(app);
const io = new Server(server);
require("dotenv").config({
  path: "./config/.env",
});
app.use(cors());
app.use(express.json());
app.use(express.static("assets"));
connectDB();
app.use("/route", routes);
io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});
server.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
