import server from './server';

const app = server();
const port = 3000;

// todo add support for host
app.listen(port, () => {
  console.log(`You are listening on port ${port}`);
});
