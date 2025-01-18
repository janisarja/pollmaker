const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { Poll, Option } = require('./models')

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors({
  origin: 'https://pollmaker-two.vercel.app/' || 'http://localhost:5173/'
}))

app.use(express.json())

app.post('/api/polls', async (req, res) => {
  try {
    const { title, options, multipleOptions } = req.body
    const newPoll = await Poll.create({pollTitle: title, multipleOptions: multipleOptions})

    options.map(async (option) => { 
      await Option.create({
        pollId: newPoll.pollId,
        optionText: option
      }
    )})

    console.log('Poll created')

    return res.status(201).json(newPoll)

  } catch(error) {
    console.error('Error creating poll:',  error)
    return res.status(400).json({ error: error.message || 'An error occurred while creating the poll' })
  }
})

app.post('/api/polls/:pollId/vote', async (req, res) => {
  try {
    const { pollId } = req.params
    const { optionIds } = req.body

    const poll = await Poll.findOne({ where: { pollId } })

    if (!poll) {
      return res.status(404).json({ message: 'Option not found' })
    }

    const options = await Option.findAll({
      where: {
        optionId: optionIds,
        pollId: pollId
      }
    })

    if (options.length !== optionIds.length) {
      return res.status(400).json({ message: 'Not all options were found' })
    }

    await Promise.all(
      options.map((option) => option.increment('optionVotes'))
    )
    
    res.status(200).json({ message: 'Votes added successfully'})

  } catch(error) {
    return res.status(500).json({ error })
  }
})

app.get('/api/polls/:pollId', async (req, res) => {
  try {
    const pollId = req.params.pollId;

    console.log('Trying to access', pollId)

    const poll = await Poll.findOne({
      where: { pollId }
    })

    const options = await Option.findAll({
      where: { pollId },
      order: [['optionId', 'ASC']]
    })

    if (!poll) {
      return res.status(404).json({ message: 'Poll not found' })
    }

    return res.json({ poll, options })

  } catch (error) {
    return res.status(500).json({ error })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
});
