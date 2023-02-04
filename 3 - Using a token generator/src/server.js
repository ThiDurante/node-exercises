const {app} = require('./app');

const PORT = process.env.PORT || 3002;

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server listening on port ${PORT}`);
});
