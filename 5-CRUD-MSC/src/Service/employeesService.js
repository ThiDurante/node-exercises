const employeesModel = require('../Model/employeesModel');
const Joi = require('joi');

const employeeSchema = Joi.object({
  firstName: Joi.string().min(2).max(45).required(),
  lastName: Joi.string().min(2).max(45).required(),
  office: Joi.number().min(1).integer().required(),
});

const getAll = async () => {
  const employess = employeesModel.getAll();
  return employess;
};

const create = async ({ firstName, lastName, office }) => {
  const { error } = employeeSchema.validate({ firstName, lastName, office });
  if (error) throw { status: 400, message: error.message };

  const id = await employeesModel.create({
    firstName,
    lastName,
    office,
  });

  return { id, firstName, lastName, office };
};

module.exports = {
  getAll,
  create,
};
