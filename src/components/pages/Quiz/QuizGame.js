import React, { useState } from 'react'
import { useNavigate } from "react-router";
import '../../../App.css';
import './QuizGame.css';
import QuizHeader from '../../quiz components/QuizHeader';
import Footer from '../../Footer';
import { Button, MenuItem, TextField } from "@material-ui/core";
import Categories from './QuizCategories';
import QuizErrorMessage from './QuizErrorMessage';


function QuizGame({name, setName, fetchQuestions}) {

    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit =() => {
        if (!category||!difficulty||!name){
            setError(true);
            return;
        }
        else{
            setError(false)
            fetchQuestions(category,difficulty)
            navigate('/minigames/quiz/questions')
        }

    };


    return (
        <>
            <div className='quiz-container-background'>
                <div className="quiz-container">
                    <QuizHeader />
                    <div className="quiz-home-page">
                        <div className="quiz-settings">
                            <span style={{ fontSize: 30 }}>Quiz Settings</span>

                            <div className="quiz-settings-select">
                                {error && <QuizErrorMessage>Please Fill all the fields</QuizErrorMessage>}

                                <TextField
                                    style={{ marginBottom: 25 }}
                                    label="Enter Your Name"
                                    variant="outlined"
                                    onChange = {(e) => setName(e.target.value)}
                                />

                                <TextField
                                    select
                                    label="Select Category"
                                    variant="outlined"
                                    style={{ marginBottom: 30 }}
                                    onChange = {(e) => setCategory(e.target.value)}
                                    value={category}
                                >
                                    {
                                        Categories.map((cat) => (
                                            <MenuItem key={cat.category} value={cat.value}>
                                                {cat.category}
                                            </MenuItem>
                                        ))
                                    }
                                </TextField>

                                <TextField
                                    select
                                    label="Select Difficulty"
                                    variant="outlined"
                                    style={{ marginBottom: 30 }}
                                    onChange = {(e) => setDifficulty(e.target.value)}
                                    value={difficulty}
                                >
                                    <MenuItem key="Easy" value="easy">
                                        Easy
                                    </MenuItem>
                                    <MenuItem key="Medium" value="medium">
                                        Medium
                                    </MenuItem>
                                    <MenuItem key="Hard" value="hard">
                                        Hard
                                    </MenuItem>
                                </TextField>

                                <Button variant="contained" color="primary" size="large"
                                onClick={handleSubmit}>
                                    Start Quiz
                                </Button>
                            </div>


                        </div>
                        <img src='../../../../images/quizbanner.svg' className="quiz-banner" alt="quiz img" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default QuizGame