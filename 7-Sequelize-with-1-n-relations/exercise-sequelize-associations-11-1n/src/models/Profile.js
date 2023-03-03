/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define(
    'Profile',
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      tableName: 'Profiles',
      underscored: true,
    }
  );

  Profile.associate = (models) => {
    Profile.belongsTo(models.Account, {
      foreignKey: 'AccountId',
      as: 'account',
    });
  };

  return Profile;
};
