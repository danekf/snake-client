let connection;

//handling input
const handleUserInput = function (key, conn) {
  if (key === "w" || key === "W" ){
    connection.write("Move: up");
  }
  else if (key === "a" || key === "A" ){
    connection.write("Move: left");
  }
  else if (key === "s" || key === "S" ){
    connection.write("Move: down");
  }
  else if (key === "d" || key === "D" ){
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