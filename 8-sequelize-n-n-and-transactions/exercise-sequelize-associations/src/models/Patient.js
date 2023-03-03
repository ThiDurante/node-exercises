/**
 *
 * @param {import*('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define(
    'Patient',
    {
      patient_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fullname: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      plan_id: { type: DataTypes.INTEGER, foreignKey: true },
    },
    { timestamps: false }
  );
  Patient.associate = (models) => {
    Patient.belongsTo(models.Plan, {
      foreignKey: 'plan_id',
      as: 'plan',
    });
  };
  return Patient;
};
