import React, { useEffect, useState } from 'react'
import '../../../App.css';
import './QuizGame.css';
import QuizHeader from '../../quiz components/QuizHeader';
import Footer from '../../Footer';
import { CircularProgress } from "@material-ui/core";
import './QuizIn.css';
import QuizQuestion from './QuizQuestion';

function QuizIn({ name, score, questions, setScore }) {

    const [options, setOptions] = useState()
    const [currQues, setCurrQues] = useState(0);

    useEffect(() => {
        console.log(questions);

        setOptions(questions && handleShuffle([
            questions[currQues]?.correct_answer,
            ...questions[currQues]?.incorrect_answers,
        ]));
    }, [questions, currQues]);

    console.log(options);

    const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5);
    }

    return (
        <>
            <div className='quiz-container-background'>
                <div className="quiz-container">
                    <QuizHeader />
                    <div className="quiz-question-page">
                        <span className="quiz-subtitle">Welcome, {name}</span>

                        {questions ? (
                            <>
                                <div className="quiz-info">
                                    <span>{questions[currQues].category}</span>
                                    <span>Score: {score}</span>
                                </div>

                                <QuizQuestion
                                    currQues={currQues}
                                    setCurrQues={setCurrQues}
                                    questions={questions}
                                    options={options}
                                    correct={questions[currQues]?.correct_answer}
                                    score={score}
                                    setScore={setScore}
                                />
                            </>
                        ) : (
                            <CircularProgress style={{ margin: 100 }}
                                color="inherit"
                                size={150}
                                thickenss={1}
                            />
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default QuizIn