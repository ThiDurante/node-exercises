const fs = require('fs').promises;

const getData = async () => {
  const data = await fs.readFile('./dataSimpson.json', 'utf-8');
  return JSON.parse(data);
};

module.exports = {
  getData,
};
