import http from 'http';
import listen from './listen';
import get from './get';

const express = () => {
  const server = http.createServer();

  return {
    listen: listen(server),
    get: get(server),
  };
};

export default express;
