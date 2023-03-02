/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 */

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      message: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      upvoting: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      downvoting: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
      tableName: 'Comments',
      underscored: true,
    }
  );

  Comment.associate = (models) => {
    Comment.belongsTo(models.Account, {
      foreignKey: 'accountId',
      as: 'account',
    });
  };

  return Comment;
};
