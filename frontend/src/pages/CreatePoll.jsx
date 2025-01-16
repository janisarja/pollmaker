import React from "react";
import { useState } from 'react'

const CreatePoll = () => {
  const [title, setTitle] = useState("");
  const [ options, setOptions ] = useState([""])

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  return (
    <div>
      <h1>
        Make a New Poll
      </h1>
      <form>
        <label htmlFor="title">Poll Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {options.map((option, index) => (
          <div key={index}>
            <label htmlFor={`option${index}`}>Option {index + 1}: </label>
            <input 
              type="text" 
              id={`option${index}`} 
              value={option} 
              onChange={(e) => handleOptionChange(index, e.target.value)}/>
          </div>
        ))}
        <button type="button" onClick={handleAddOption}>Add Option</button>
        <button>Done</button>
      </form>
    </div>
  )
}

export default CreatePoll
