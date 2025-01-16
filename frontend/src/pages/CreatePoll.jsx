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

  const handleSubmit = async (e) => {
    e.preventDefault()
    const pollData = { title, options }

    try {
      const response = await fetch("http://localhost:5000/api/polls", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pollData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
      } else {
        console.error("Error creating poll:", response.statusText);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return (
    <div>
      <h1>
        Make a New Poll
      </h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Done</button>
      </form>
    </div>
  )
}

export default CreatePoll
