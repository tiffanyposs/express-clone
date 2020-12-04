const listen = (server) => (port, callback) => {
  const defaultOptions = {
    host: '127.0.0.1',
    port: 3000,
  };

  server.listen(
    port || defaultOptions.port,
    defaultOptions.host,
    callback,
  );
};

export default listen;
