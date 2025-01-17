const { Sequelize, Model, DataTypes } = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE_URL)

class Poll extends Model {}
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
  timestamps: false,
  modelName: "poll"
})

module.exports = Poll;
