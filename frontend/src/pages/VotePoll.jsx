import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const VotePoll = () => {
  const { pollId } = useParams()
  const [ pollData, setPollData ] = useState(null)

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
  }, [pollId])

  return (
    <div>
      <p>
        Answer the poll below.
      </p>
      {pollData != null ? 
        <div>
          <h2>{pollData.poll.pollTitle}</h2>
          <form>
            {pollData.poll.Options.map(option => (
              <div key={option.optionId}>
                <label>
                  <input 
                    type={pollData.poll.multipleOptions ? 'checkbox' : 'radio'} 
                    id={option.optionId} 
                    value={option.optionId} />
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
