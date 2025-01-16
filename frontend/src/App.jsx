import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePoll from "./pages/CreatePoll";
import PollLink from "./pages/PollLink";
import VotePoll from "./pages/VotePoll";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<CreatePoll />} />
          <Route path="/link/" element={<PollLink />} />
          <Route path="/poll/" element={<VotePoll />} />
        </Routes>
    </Router>
  );
};

export default App;
