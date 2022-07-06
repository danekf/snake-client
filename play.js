const net = require("net");
const connect = require("client.js");

console.log("Connecting ...");
connect();

//start console logging data once connection is established
conn.on("connect", (data) => {
  console.log(data);
});
