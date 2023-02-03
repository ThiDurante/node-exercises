const fs = require('fs').promises;
const path = require('path');

const activitiesPath = path.resolve(__dirname, './readFile.js');

const readFile = async (path) => {
  if (!path) {
    path = activitiesPath;
  }
  const data = await fs.readFile(path);
  return JSON.parse(data);
};

const writeFile = async (newActivitie, path) => {
  if (!path) {
    path = activitiesPath;
  }
  const data = await fs.readFile(path);
  const newData = [...data, newActivitie];
};
