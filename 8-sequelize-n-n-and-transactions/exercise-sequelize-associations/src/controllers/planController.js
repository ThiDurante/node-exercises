const { Patient, Plan } = require('../models');

const getPlanPatientsById = async (req, res) => {
  try {
    const { id } = req.params;
    const allPatientsWithPlan = await Plan.findAll({
      where: { plan_id: id },
      include: [{ model: Patient, as: 'patients' }],
    });
    return res.status(200).json(allPatientsWithPlan);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  getPlanPatientsById,
};
