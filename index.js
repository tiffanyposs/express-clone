import server from './server';

const app = server();
const port = 3000;

app.get('/helloworld', (req, res) => {
  res.statusCode = 200;
  res.end('Hello World');
});

// todo add support for host
app.listen(port, () => {
  console.log(`You are listening on port ${port}`);
});
