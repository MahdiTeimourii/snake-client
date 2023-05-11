const net = require("net");
const handleUserInput = function (key) {
  if (key === '\u0003') { // Check for Ctrl+C input
    process.exit(); // Terminate the game
  }
};

// Establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '172.26.131.s90',
    port: 50541,
  });

  conn.on('connect', () => {
    console.log('Connection is successfully established!');
    conn.write('Name: MTT');
    // conn.write('Move: up'); // Send the "Move: up" command
    //conn.write('Move: down');
    //conn.write('Move: left');
    //conn.write('Move: right');
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("You ded cuz you idled", data);
    return conn;
  });

  const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    return stdin;
  };

  const stdin = setupInput();
  stdin.on("data", handleUserInput);
};

module.exports = { connect };
