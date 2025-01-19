import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SERVER = import.meta.env.VITE_SERVER
const BASE_URL = import.meta.env.VITE_BASE_URL

const VotePoll = () => {
  const { pollId } = useParams()
  const [ pollData, setPollData ] = useState(null)
  const [ showResults, setShowResults ] = useState(false)
  const [ totalVotes, setTotalVotes ] = useState(0)

  useEffect (() => {
    if (!pollId) return

    async function fetchPollData() {
      try {
        console.log(`Trying to access poll at ${SERVER}api/polls/${pollId}`)
        const response = await fetch(`${SERVER}api/polls/${pollId}`)
        if (!response.ok) {
          throw new Error('Poll not found')
        }
        const data = await response.json()
        console.log('Response: ', data)
        setPollData(data)

        const votes = data.options.reduce((total, option) => {
          return total + option.optionVotes
        }, 0)
        setTotalVotes(votes)
      } catch (error) {
        console.error('Error fetching poll:', error)
      }
    }

    fetchPollData()
  }, [pollId, showResults])

  const handleVote = async (e) => {
    e.preventDefault()

    if (showResults) {
      setShowResults(false)
      return
    }

    const optionIds = [...e.target.elements]
      .filter(option => option.checked)
      .map(option => option.value)

    const response = await fetch(`${SERVER}api/polls/${pollId}/vote`, {
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
      {pollData != null ? 
        <div>
          <h2>{pollData.poll.pollTitle}</h2>
          <form onSubmit={handleVote}>
            {pollData.options.map(option => (
              <div key={option.optionId} className='option'>
                <label>
                  { !showResults ? 
                    <input 
                      type={pollData.poll.multipleOptions ? 'checkbox' : 'radio'} 
                      id={option.optionId} 
                      value={option.optionId} />
                    :
                    <p className='result'>
                      Votes: {option.optionVotes} ({
                        Math.round(option.optionVotes / totalVotes * 100)
                      }%)
                    </p>
                  }
                  {option.optionText}
                </label>
              </div>
            ))}
            <button type='submit'>vote</button>
          </form>
          {!showResults ?
            <button 
              type='button' 
              onClick={() => setShowResults(true)}>
                show results
            </button>
            : <></>
          }
        </div>
        :
        <p>poll data not found.</p>
      }
      <a href={BASE_URL}>make your own poll</a>
    </div>
  )
}

export default VotePoll
