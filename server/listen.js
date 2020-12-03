const listen = (server) => (port, host) => {
  const defaultOptions = {
    host: '127.0.0.1',
    port: 3000,
  };

  server.listen(
    port || defaultOptions.port,
    host || defaultOptions.host,
    () => console.log(`Server running on port ${port}`),
  );
};

export default listen;
