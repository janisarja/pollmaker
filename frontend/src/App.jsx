import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CreatePoll from "./pages/CreatePoll"
import VotePoll from "./pages/VotePoll"

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<CreatePoll />} />
          <Route path="/polls" element={<VotePoll />} />
        </Routes>
    </Router>
  )
}

export default App
