/**
 *
 * @param {import*('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

module.exports = (sequelize, _DataTypes) => {
  const PatientSurgery = sequelize.define(
    'Patient_surgery',
    {},
    { timestamps: false }
  );
  PatientSurgery.associate = (models) => {
    models.Surgery.belongsToMany(models.Patient, {
      as: 'patients',
      through: PatientSurgery, // to which table its going to be
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
    });
    models.Patient.belongsToMany(models.Surgery, {
      as: 'surgeries',
      through: PatientSurgery,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    });
  };
  return PatientSurgery;
};
