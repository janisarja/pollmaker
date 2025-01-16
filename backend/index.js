const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors({ origin: "http://localhost:5173" }))

app.use(express.json())

app.post("/api/polls", (req, res) => {
  const { title, options } = req.body

  const newPoll = { id: Date.now(), title, options }
  console.log("Poll created:", newPoll)

  res.status(201).json(newPoll)
})

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
