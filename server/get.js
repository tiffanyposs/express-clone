/**
  * @name handleRequest
*/
const handleRequest = (req, res, routes) => {
  const { url, method } = req;

  res.setHeader('Content-Type', 'text/plain');

  const callback = routes?.[url]?.callback;

  if (method === 'GET' && callback) {
    routes[url].callback(req, res);
  }

  res.end(`${method} ${url}`);
};

/**
  * @name get
*/
const get = (server) => {
  const routes = {};

  server.on('request', (req, res) => handleRequest(req, res, routes));

  return (route, callback) => {
    routes[route] = {
      route,
      callback,
    };
  };
};

export default get;
