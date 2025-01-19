import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CreatePoll from "./pages/CreatePoll"
import VotePoll from "./pages/VotePoll"
import Header from './components/Header'
import GlobalStyle from './styles/GlobalStyle'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <header><Header /></header>
      <div className='container'>
        <Router>
            <Routes>
              <Route path="/" element={<CreatePoll />} />
              <Route path="/polls/:pollId" element={<VotePoll />} />
            </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
