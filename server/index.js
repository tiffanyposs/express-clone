import http from 'http';
import listen from './listen';

const express = () => {
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
  });

  return {
    listen: listen(server),
  };
};

export default express;
