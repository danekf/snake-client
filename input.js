let connection;

//handling input
const handleUserInput = function (key, conn) {
  if (key === "w" ){
    connection.write("Move: up");
  }
  else if (key === "a" ){
    connection.write("Move: left");
  }
  else if (key === "s" ){
    connection.write("Move: down");
  }
  else if (key === "d" ){
    connection.write("Move: right");
  }

  //special messages
  else if (key === "f" ){
    connection.write("Say: Press F to respect");
  }
  //exit if CTRL C is pressed
  else if (key === '\u0003') {
    process.exit();
  }

};

//given setup by LHL
const setupInput = function (conn) {

  const stdin = process.stdin;
  connection = conn;

  stdin.on("data", handleUserInput, connection);

  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};



module.exports = {
  setupInput,
}