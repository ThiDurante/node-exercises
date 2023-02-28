const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll({ order: [['title', 'ASC']] });
  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

const create = async (attrib) => {
  const newBook = await Book.create(attrib);
  return newBook;
};

const update = async (id, updatedValue) => {
  const updatedBook = await Book.update(updatedValue, { where: { id } });
  return updatedBook;
};

const remove = async (id) => {
  const removedBook = await Book.destroy({ where: { id } });
  return removedBook;
};

const getByAuthor = async (author) => {
  const books = await Book.findAll({
    where: { author },
    order: [['title', 'ASC']],
  });
  return books;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByAuthor,
};
