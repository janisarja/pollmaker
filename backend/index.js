const express = require('express')
const cors = require('cors')
const Sequelize = require('sequelize')
require('dotenv').config()
const app = express()
const Poll = require('./models/Poll')
const Option = require('./models/Option')

const PORT = process.env.PORT || 3000

app.use(cors())

app.use(express.json())

app.use(express.static('dist'))

app.post('/api/polls', async (req, res) => {
  try {
    const { title, options } = req.body
    const newPoll = await Poll.create({pollTitle: title, multipleOptions: true})
  
    options.map(async (option) => { 
      await Option.create({
        pollId: newPoll.pollId,
        optionText: option
      }
    )})

    return res.status(201).json(newPoll)

  } catch(error) {
    return res.status(400).json({ error })
  }
})

app.get("/api/polls/:pollId", async (req, res) => {
  try {
    const pollId = req.params.pollId;

    const poll = await Poll.findOne({
      where: { pollId },
      include: Option
    })

    if (!poll) {
      return res.status(404).json({ message: "Poll not found" });
    }

    return res.json({ poll, options: poll.options });

  } catch (error) {
    return res.status(500).json({ error });
  }
})

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
