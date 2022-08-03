import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import QuizErrorMessage from './QuizErrorMessage';
import "./QuizQuestion.css";
import { useNavigate } from "react-router";

const QuizQuestion = ({
    currQues,
    setCurrQues,
    questions,
    options,
    correct,
    setScore,
    score,
}) => {

    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSelect = (i) => {
        if (selected === i && selected === correct) {
            return "select";
        }
        else if (selected === i && selected !== correct) {
            return "wrong";
        } else if (i === correct) {
            return "select";
        }
    };

    const handleCheck = (i) => {
        setSelected(i);
        if (i === correct) setScore(score + 1);
        setError(false);
    };

    const handleNext = () => {
        if (currQues > 8) {
            navigate("/minigames/quiz/result")
        }
        else if (selected) {
            setCurrQues(currQues + 1)
            setSelected()
        } else {
            setError("Please select an option first")
        }
    };

    const handleQuit = () => { };

    return (
        <div className="quiz-question">
            <h1 className="quiz-question-header">Question {currQues + 1}</h1>
            <div className="single-question">
                <h2 dangerouslySetInnerHTML={{ __html: questions[currQues].question }}></h2>

                <div className="quiz-options">
                    {error && <QuizErrorMessage>{error}</QuizErrorMessage>}
                    {
                        options &&
                        options.map(i => (
                            <button
                                onClick={() => handleCheck(i)}
                                className={`singleOption ${selected && handleSelect(i)}`}
                                key={i}
                                disabled={selected}
                                dangerouslySetInnerHTML={{
                                    __html: i }}
                            >    
                            </button>))
                    }
                </div>

                <div className="quiz-controls">
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        style={{ width: 185 }}
                        href="/minigames/quiz"
                        onClick={handleQuit}
                    >
                        Quit
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{ width: 185 }}
                        onClick={handleNext}
                    >
                        Next Question
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default QuizQuestion