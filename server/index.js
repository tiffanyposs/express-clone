import createServer from './createServer';
import listen from './listen';

const express = () => {
  const server = createServer();

  return {
    listen: listen(server),
  };
};

export default express;
