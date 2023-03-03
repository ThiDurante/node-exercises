/**
 *
 * @param {import*('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define(
    'Plan',
    {
      plan_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      coverage: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.DOUBLE,
      },
    },
    { timestamps: false }
  );
  Plan.associate = (models) => {
    Plan.hasMany(models.Patient, {
      foreignKey: 'plan_id',
      as: 'patients',
    });
  };
  return Plan;
};
