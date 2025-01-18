import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const VotePoll = () => {
  const { pollId } = useParams()
  const [ pollData, setPollData ] = useState(null)
  const [ showResults, setShowResults ] = useState(false)

  useEffect (() => {
    if (!pollId) return

    async function fetchPollData() {
      try {
        const response = await fetch(`/api/polls/${pollId}`)
        if (!response.ok) {
          throw new Error('Poll not found')
        }
        const data = await response.json()
        console.log('Response: ', data)
        setPollData(data)
      } catch (error) {
        console.error('Error fetching poll:', error)
      }
    }

    fetchPollData()
  }, [pollId, showResults])

  const handleVote = async (e) => {
    e.preventDefault()

    const optionIds = [...e.target.elements]
      .filter(option => option.checked)
      .map(option => option.value)

    const response = await fetch(`/api/polls/${pollId}/vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ optionIds })
    })

    if (!response.ok) {
      console.error('Error adding votes:', response.statusText);
    } else {
      setShowResults(true)
    }
  }

  return (
    <div>
      <p>
        Answer the poll below.
      </p>
      {pollData != null ? 
        <div>
          <h2>{pollData.poll.pollTitle}</h2>
          <form onSubmit={handleVote}>
            {pollData.options.map(option => (
              <div key={option.optionId}>
                <label>
                  { !showResults ? 
                    <input 
                      type={pollData.poll.multipleOptions ? 'checkbox' : 'radio'} 
                      id={option.optionId} 
                      value={option.optionId} />
                    :
                    <p>{option.optionVotes}</p>
                  }
                  {option.optionText}
                </label>
              </div>
            ))}
            <button type='submit'>Vote</button>
          </form>
        </div>
        :
        <p>Poll data not found.</p>
      }
    </div>
  )
}

export default VotePoll
