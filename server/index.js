const { Server } = require("socket.io");
const express = require("express");
const http = require("http");
const cors = require("cors");
const app = express();
const server = http.createServer(app);
const io = new Server(server);
app.use(cors());
app.use(express.json());
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});
server.listen(4000, () => {
  console.log("Server is running on port 4000");
});
