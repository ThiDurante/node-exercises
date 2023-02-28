const BooksService = require('../services/BooksService');

const getAll = async (req, res) => {
  if (req.query.author) {
    console.log(req.query.author);
    const books = await BooksService.getByAuthor(req.query.author);
    return res.status(200).json(books);
  }
  const books = await BooksService.getAll();
  return res.status(200).json(books);
};

const getById = async (req, res) => {
  const id = req.params.id;
  const book = await BooksService.getById(id);
  if (!book) res.status(404).json({ message: 'Book not found' });
  res.status(200).json(book);
};

const create = async (req, res) => {
  const newBook = await BooksService.create(req.body);
  res.status(201).json(newBook);
};

const update = async (req, res) => {
  const id = req.params.id;
  const updatedBook = await BooksService.update(id, req.body);
  res.status(203).json(updatedBook);
};

const remove = async (req, res) => {
  const id = req.params.id;
  const removedBook = await BooksService.remove(id);
  res.status(204).json(removedBook);
};

const getByAuthor = async (req, res) => {
  const author = req.query.author;
  console.log(author);
  const books = await BooksService.getByAuthor(author);
  if (!books) res.status(404).json({ message: 'Author not found' });
  res.status(200).json(books);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByAuthor,
};
