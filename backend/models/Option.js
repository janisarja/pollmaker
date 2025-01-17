const { Model, DataTypes } = require('sequelize')

class Option extends Model {}

module.exports = (sequelize) => {
  Option.init({
    optionId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    pollId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    optionText: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    optionVotes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    sequelize,
    underscored: true,
    timestamps: false
  })
  return Option
}
