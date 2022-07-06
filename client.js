// establishes a connection with the game server
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243" ,
    port: "50541"
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //start console logging data once connection is established
  conn.on("connect", (data) => {
    console.log(data);
  });

  return conn;

  
};

module.exports = {connect};