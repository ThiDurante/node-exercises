const connection = require('./connection');

const getAll = async () => {
  try {
    const query = 'SELECT * FROM MSC_DB.employees';
    const [employees] = await connection.execute(query);
    return employees;
  } catch (error) {
    return error;
  }
};

const create = async ({ firstName, lastName, office }) => {
  try {
    const query =
      'INSERT INTO MSC_DB.employees (first_name, last_name, office) VALUES (?, ?, ?)';
    const [newEmployee] = await connection.execute(query, [
      firstName,
      lastName,
      office,
    ]);
    return newEmployee.insertId;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAll,
  create,
};
