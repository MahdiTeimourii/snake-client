const connect = function () {
  const conn = net.createConnection({
    host: '172.26.131.90',
    port: 50541,
  });

  module.exports = { connect };
};