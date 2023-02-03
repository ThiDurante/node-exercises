const app = require('./app');
const connection = require('./db/connection');

const PORT = process.env.PORT || 3001;

app.listen(PORT, async () => {
  console.log(`TrybeCash Listenning on ${PORT}`);
  const [result] = await connection.execute('SELECT 1');
  if (result) {
    console.log('DB connection: OK');
  }
});
