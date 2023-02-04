const {getData} = require('./getData');
const fs = require('fs').promises;

const deleteId = async (ids) => {
  const data = await getData();
  const newArr = data.filter((el) => !ids.includes(+el.id));
  try {
    await fs.writeFile('./newDataSimpson.json', JSON.stringify(newArr));
  } catch (error) {}
};

deleteId([3]);
