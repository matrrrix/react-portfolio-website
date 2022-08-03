import React from 'react'

const HangmanFigure = ({wrongLetters}) => {
    const errors = wrongLetters.length;
  return (
    <svg height="250" width="350" className="figure-container">
        {/* <!-- Rod --> */}
        <line x1="250" y1="20" x2="320" y2="20" />
        <line x1="320" y1="20" x2="320" y2="50" />
        <line x1="250" y1="20" x2="250" y2="230" />
        <line x1="210" y1="230" x2="290" y2="230" />

        {/* <!-- Head --> */}
        {errors > 0 && <circle cx="320" cy="70" r="20"/>}
        {/* <!-- Body --> */}
        {errors > 1 &&<line x1="320" y1="90" x2="320" y2="150"/>}
        {/* <!-- Arms --> */}
        {errors > 2 &&<line x1="320" y1="120" x2="300" y2="100"/>}
        {errors > 3 &&<line x1="320" y1="120" x2="340" y2="100"/>}
        {/* <!-- Legs --> */}
        {errors > 4 &&<line x1="320" y1="150" x2="300" y2="180"/>}
        {errors > 5 &&<line x1="320" y1="150" x2="340" y2="180"/>}
      </svg>
  )
}

export default HangmanFigure