const express = require('express')
const cors = require('cors')
const Sequelize = require('sequelize')
require('dotenv').config()
const app = express()
const Poll = require('./models/Poll')
const Option = require('./models/Option')

const sequelize = new Sequelize(process.env.DATABASE_URL)

const PORT = process.env.PORT || 3000

app.use(cors())

app.use(express.json())

app.use(express.static('dist'))

app.post('/api/polls', async (req, res) => {
  console.log('Poll created:', newPoll)
  res.status(201).json(newPoll)

  try {
    const { title, options } = req.body
    const newPoll = await Poll.create({pollTitle: title, multipleOptions: true})
  
    options.map(async (option) => { 
      console.log(option.optionText)
      await Option.create({
        pollId: newPoll.pollId,
        optionText: option
      }
    )})
  } catch(error) {
    return res.status(400).json({ error })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
