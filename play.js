const client = require("./client.js")

//handling input
const handleUserInput = function (key) {
  
  //exit if CTRL C is pressed
  if (key === '\u0003') {
    process.exit();
  }

};

//given setup by LHL
const setupInput = function () {

  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};



console.log("Connecting ...");
client.connect();
setupInput();
