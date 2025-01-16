const express = require("express")
const cors = require("cors")
const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())

app.use(express.json())

app.use(express.static('dist'))

app.post("/api/polls", (req, res) => {
  const { title, options } = req.body

  const newPoll = { id: Date.now(), title, options }
  console.log("Poll created:", newPoll)

  res.status(201).json(newPoll)
})

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
