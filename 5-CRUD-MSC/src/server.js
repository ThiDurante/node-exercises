const app = require('./app.js');
const connection = require('./Model/connection');

const PORT = process.env.PORT || 3001;

app.listen(PORT, '127.0.0.1', async () => {
  console.log(`Server listenning on port: ${PORT}`);
  const [result] = await connection.execute('SELECT 1');
  if (result) {
    console.log('Connected to DB');
  }
});
