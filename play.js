const { connect } = require('./client');
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '172.26.131.90',
    port: 50541,
  });
  conn.on('connect', () => {
    console.log('connection is successfully established.!');
    conn.write('Name: ___');
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("you ded cuz you idled", data);
    return conn;
  });

  console.log("Connecting ...");
  connect();
};