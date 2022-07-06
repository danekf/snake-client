// establishes a connection with the game server
const net = require("net");
const {host, port} = require("./constants")

const connect = function () {
  const conn = net.createConnection({
    host,
    port
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //do things on connection established
  conn.on("connect", () =>{
    conn.write("Name: DF");
  });

  //start console logging data
  conn.on("data", (data) => {
    console.log(`${data}`);
  });

  //movement on connect
  conn.on("connect", () =>{

  });
    return conn;
};

module.exports = {connect};