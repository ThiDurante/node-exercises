const fs = require('fs').promises;

const getData = async () => {
  const data = await fs.readFile('./dataSimpson.json', 'utf-8');
  return JSON.parse(data);
};

const selectId = async (id) => {
  const data = await getData();
  console.log(data);
  const promise = new Promise((resolve, reject) => {
    if (!data.some((el) => +el.id === id))
      reject(new Error('This id does not exists'));
    resolve(data.filter((el) => +el.id === id).pop());
  });
  return promise;
};

selectId(5)
  .then((result) => console.log('Here is your info: %s', result))
  .catch((err) => console.log('Error: %s', err));
