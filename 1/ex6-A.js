const fs = require('fs').promises;

const readFileFunc = async () => {
  try {
    const data = await fs.readFile('./dataSimpson.json', 'utf-8');
    JSON.parse(data).map((e) => console.log(`${e.id} - ${e.name}`));
  } catch (error) {
    console.log(('Error: %s', error));
  }
};

readFileFunc();
