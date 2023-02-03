const fs = require('fs').promises;
const path = require('path');

const moviesPath = path.resolve(__dirname, './movies.json');

const readData = async () => {
  const data = await fs.readFile(moviesPath);
  return JSON.parse(data);
};

module.exports = {
  readData,
  moviesPath,
};
