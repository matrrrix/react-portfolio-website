import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from
  'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Minigames from './components/pages/Minigames';
import Socials from './components/pages/Socials';
import Hangman from './components/pages/Hangman';
import QuizGame from './components/pages/Quiz/QuizGame';
import QuizIn from './components/pages/Quiz/QuizIn';
import QuizResult from './components/pages/Quiz/QuizResult';
import axios from 'axios';

function App() {

  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async( category= "",difficulty= "" ) => {

    const { data }=await axios.get(`https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions(data.results);
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/minigames' element={<Minigames />} />
          <Route path='/socials' element={<Socials />} />
          <Route path='/minigames/hangman' element={<Hangman />} />
          <Route path='/minigames/quiz' element={<QuizGame
            name={name}
            setName={setName}
            fetchQuestions={fetchQuestions} />}
          />
          <Route path='/minigames/quiz/questions' element={<QuizIn 
          name={name}
          questions={questions}
          score={score}
          setScore={setScore}
           />}
          />
          <Route path='/minigames/quiz/result' element={<QuizResult 
          name={name}
          score={score}
          />}
           />
        </Routes>
      </Router>
    </>
  );
}

export default App;
