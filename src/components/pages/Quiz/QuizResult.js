import React, { useEffect } from 'react'
import '../../../App.css';
import './QuizGame.css';
import QuizHeader from '../../quiz components/QuizHeader';
import Footer from '../../Footer';
import { useNavigate } from "react-router";
import { Button } from '@material-ui/core';
import "./QuizResult.css";

function QuizResult({ name, score }) {

    const navigate = useNavigate();

    useEffect(() => {
        if (!name) {
            navigate("/minigames/quiz");
        }
    }, [name, navigate]);

    return (
        <>
            <div className='quiz-container-background'>
                <div className="quiz-container">
                    <QuizHeader />
                    <div className="quiz-result-page">
                        <span className="quiz-title">Final Score : {score}/10</span>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            style={{alignSelf:"center", marginTop:20}}
                            href="/minigames/quiz"
                        >
                            Go To Homepage
                        </Button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default QuizResult