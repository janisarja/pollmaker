import React from 'react';
import { useState } from 'react'
import Header from '../components/Header'

const CreatePoll = () => {
  const [ title, setTitle ] = useState('');
  const [ options, setOptions ] = useState([''])
  const [ pollId, setPollId ] = useState('')
  const [ multipleOptions, setMultipleOptions ] = useState(false)

  const baseUrl = window.location.href

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleMultipleChange = () => {
    multipleOptions ? setMultipleOptions(false) : setMultipleOptions(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const pollData = { title, options, multipleOptions }

    try {
      const response = await fetch('https://pollmaker.fly.dev/api/polls', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pollData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setPollId(result.pollId)
      } else {
        console.error('Error creating poll:', response.statusText);
      }
    } catch (error) {
      console.error('Request failed:', error);
    }
  };

  return (
    <div>
      <Header />
      {!pollId ?
        <>
          <h2>
            make a new poll
          </h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='title'>poll title:</label>
              <input
                type='text'
                id='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              {options.map((option, index) => (
                <div key={index}>
                  <label>
                    option {index + 1}: 
                    <input 
                      type='text' 
                      id={`option${index}`} 
                      value={option} 
                      onChange={(e) => handleOptionChange(index, e.target.value)}/>
                  </label>
                </div>
              ))}
              <label>
                <input 
                  type='checkbox' 
                  id='multipleOptions' 
                  value={multipleOptions}
                  onChange={handleMultipleChange} />
                allow multiple choices
              </label>
            </div>
            <div>
              <button type='button' onClick={handleAddOption}>add option</button>
              <button type='submit'>done</button>
            </div>
          </form>
        </>
        :
        <p>
          poll created. here's the link to your poll: <a href={`${baseUrl}polls/${pollId}`}>
          {baseUrl}polls/{pollId}
          </a>
        </p>
      }
    </div>
  )
}

export default CreatePoll
