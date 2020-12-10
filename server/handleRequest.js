/**
  * @name handleRequest
  * @param req
  * @param res
  * @param registeredRoutes
*/
const handleRequest = (req, res, registeredRoutes) => {
  const { url, method } = req;

  res.setHeader('Content-Type', 'text/plain');

  const callback = registeredRoutes?.[method]?.[url]?.callback;

  if (method === 'GET') {
    callback(req, res);
    res.end(`${method} ${url}`);
  }

  if (method === 'POST') {
    let body = '';

    req.on('data', (data) => {
      body += data;
    });

    req.on('end', () => {
      req.body = body;
      callback(req, res);
    });
  }
};

export default handleRequest;
