import http from 'http';
import listen from './listen';
import handleRequest from './handleRequest';

const registeredRoutes = {
  GET: {},
  POST: {},
};

const registerRoute = (method) => (route, callback) => {
  registeredRoutes[method][route] = {
    route,
    callback,
  };
};

const express = () => {
  const server = http.createServer();

  // https://nodejs.org/api/http.html
  server.on('request', (req, res) => handleRequest(req, res, registeredRoutes));

  return {
    listen: listen(server),
    get: registerRoute('GET'),
    post: registerRoute('POST'),
  };
};

export default express;
