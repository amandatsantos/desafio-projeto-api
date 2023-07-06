import app from './app';

const port = 9000;
app.listen(port, () => {
  console.log(`porta ${port}`);
  console.log(`crtl + clique em http://localhost:${port}`);
  console.log(`crtl + clique em http://localhost:${port}/api-docs/`);
});
