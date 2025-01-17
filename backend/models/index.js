const sequelize = require('../config/sequelize')
const PollModel = require('./Poll')
const OptionModel = require('./Option')

const Poll = PollModel(sequelize)
const Option = OptionModel(sequelize)

Poll.hasMany(Option, { foreignKey: 'pollId' })
Option.belongsTo(Poll, { foreignKey: 'pollId' })

module.exports = { Poll, Option }
