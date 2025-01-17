const { Model, DataTypes } = require('sequelize')

class Poll extends Model {}

module.exports = (sequelize) => {
  Poll.init({
    pollId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    pollTitle: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    multipleOptions: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    underscored: true,
    timestamps: false
  })
  return Poll
}
