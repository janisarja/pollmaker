const { Sequelize, Model, DataTypes } = require('sequelize')
const Poll = require('./Poll')

const sequelize = new Sequelize(process.env.DATABASE_URL)

class Option extends Model {}
Option.init({
  optionId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  pollId: {
    type: DataTypes.UUID,
    references: {
      model: Poll,
      key: 'poll_id'
    }
  },
  optionText: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  optionVotes: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: "option"
})

module.exports = Option;
