const employeesService = require('../Service/employeesService');

const getAll = async (req, res) => {
  const getEmployees = await employeesService.getAll();
  res.status(200).json(getEmployees);
};

const create = async (req, res, next) => {
  try {
    const { firstName, lastName, office } = req.body;
    const newEmployee = await employeesService.create({
      firstName,
      lastName,
      office,
    });
    res.status(201).json(newEmployee);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  create,
};
