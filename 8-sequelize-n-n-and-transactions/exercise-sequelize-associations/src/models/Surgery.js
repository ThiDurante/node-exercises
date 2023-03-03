/**
 *
 * @param {import*('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

module.exports = (sequelize, DataTypes) => {
  const Surgery = sequelize.define(
    'Surgery',
    {
      surgery_id: { type: DataTypes.INTEGER, primaryKey: true },
      specialty: DataTypes.STRING,
      doctor: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  return Surgery;
};
