import React from 'react'

const HangmanNotification = ({showNotification}) => {
  return (
    // <!-- Notification -->
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>You have already entered this letter</p>
    </div>

  )
}

export default HangmanNotification