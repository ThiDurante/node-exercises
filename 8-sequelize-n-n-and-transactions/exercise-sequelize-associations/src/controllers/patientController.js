const { Patient, Plan, Surgery } = require('../models');

const getAll = async (_req, res) => {
  try {
    const allPatients = await Patient.findAll({
      include: { model: Plan, as: 'plan' },
    });
    if (allPatients.length < 1) {
      return res.status(404).json({ message: 'No patients found' });
    }
    return res.status(200).json(allPatients);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const getAllWithSurgeries = async (_req, res) => {
  try {
    const allPatients = await Patient.findAll({
      include: { model: Surgery, as: 'surgeries' },
    });
    if (allPatients.length < 1) {
      return res.status(404).json({ message: 'No patients found' });
    }
    return res.status(200).json(allPatients);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const create = async (req, res) => {
  try {
    const { fullName, plan_id } = req.body;
    const createdPatient = await Patient.create({ fullName, plan_id });
    return res.status(201).json(createdPatient);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  getAll,
  create,
  getAllWithSurgeries,
};
