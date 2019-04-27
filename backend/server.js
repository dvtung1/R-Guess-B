const app = require("./app");
const server = require("http").Server(app);
const io = require("socket.io")(server);
//if local, use 3000. otherwise, use the deploy service port
const port = process.env.PORT || 3000;

io.on("connection", socket => {
  console.log("a client has connected");
  socket.on("score", scoreObj => {
    io.emit("message", scoreObj);
  });
});

server.listen(port, () => {
  console.log("Server running on port " + port);
});
