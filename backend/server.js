const app = require("./app");
const server = require("http").Server(app);
const io = require("socket.io")(server);
//if local, use 3000. otherwise, use the deploy service port
const port = process.env.PORT || 3000;

io.on("connection", socket => {
  //print out when a client is connected
  console.log("a client has connected");

  //listen from the client's score update
  socket.on("score", scoreObj => {
    //emit the score to all other clients
    io.emit("score", scoreObj);
  });

  //listen when a client disconnects
  socket.on("disconnect", () => {
    console.log("a client has disconnected");
  });

  //listen when there is an error in socket server
  socket.on("error", error => {
    console.log(error);
  });
});

server.listen(port, () => {
  console.log("Server running on port " + port);
});
