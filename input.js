let connection;
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
//const handleUserInput = function (key) {
//if (key === '\u0003') { // Check for Ctrl+C input
//process.exit(); // Terminate the game
//} ommited
stdin.on("data", (key) => {
  if (key === "w") {
    console.log("Move: up");
  } else if (key === "a") {
    console.log("Move: left");
  } else if (key === "s") {
    console.log("Move: down");
  } else if (key === "d") {
    console.log("Move: right");
  } else if (key === "g") {
    connection.write("HOLA!");
  } else if (key === "\u0003") {
    process.exit(); // Terminate the game on Ctrl+C input
  }

});


module.exports = { setupInput };