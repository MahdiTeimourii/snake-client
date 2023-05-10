const connect = function () {
  const conn = net.createConnection({
    host: '172.26.131.90',
    port: 50541,
  });
  conn.on('connect', () => {
    console.log('connection is successfully established.!');
    conn.write('Name: ___');
  });

  module.exports = { connect };
};