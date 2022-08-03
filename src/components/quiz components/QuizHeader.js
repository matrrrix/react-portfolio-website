import React from 'react'
import { Link } from 'react-router-dom'
import "./QuizHeader.css"

const QuizHeader = () => {
  return (
    <div className="quiz-header">
        <Link to="/minigames/quiz" className="quiz-title">
            Quiz Hub
        </Link>
        <hr className="quiz-divider" />
    </div>
  )
}

export default QuizHeader