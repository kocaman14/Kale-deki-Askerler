import React from 'react'

export default function Button({ stateProps }) {
  return (
    <div className='button-container'>
      <button
        onClick={() => stateProps.setGameRunning(!stateProps.gameRunning)}
      >
        {stateProps.gameRunning ? 'Oynat' : 'Duraklat'}
      </button>
    </div>
  )
}
