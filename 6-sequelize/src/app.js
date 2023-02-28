const express = require('express');
const BooksController = require('./controllers/BooksController');

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3001;

app.get('/books', BooksController.getAll);
app.get('/books/:id', BooksController.getById);
app.put('/books/:id', BooksController.update);
app.delete('/books/:id', BooksController.remove);
app.post('/books', BooksController.create);

app.listen(PORT, () => {
  console.log(`Online on port ${PORT}`);
});
