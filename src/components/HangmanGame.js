import React, { useState, useEffect } from 'react'
import '../App.css';
import './HangmanGame.css';
import HangmanHeader from './hangman components/HangmanHeader';
import HangmanFigure from './hangman components/HangmanFigure';
import HangmanWrongLetters from './hangman components/HangmanWrongLetters';
import HangmanWord from './hangman components/HangmanWord';
import HangmanNotification from './hangman components/HangmanNotification';
import HangmanPopup from './hangman components/HangmanPopup';
import {showNotification as show} from './hangman components/helpers/helpers';

const words = [
    'dog','cat','elephant', 'serval', 'ocelot', 'giraffe', 'caracal', 'saiga', 'bear',
    'viper', 'margay', 'ferret', 'tapir', 'agouti', 'fringehead', 'markhor', 'kookaburra',
    'langur', 'baboon', 'mandrill', 'vulture', 'buzzard', 'avocet', 'albatross',
    'lemur', 'sifaka', 'cockroach', 'fossa', 'otter', 'raccoon', 'quail', 'emu',
    'cassowary', 'rhino', 'hippopotamus', 'panda', 'koala', 'alpaca', 'camel', 'cheetah',
    'eel', 'catfish', 'armadillo', 'pangolin', 'bat', 'fox', 'walrus', 'eagle',
    'beetle', 'kangaroo', 'wallaby', 'cuttlefish', 'squid', 'seal',
    'seahorse', 'duiker', 'chameleon', 'gerbil', 'manatee', 'hamster',
    'binturong', 'lobster', 'crab', 'orca', 'civet', 'dugong', 'woodpecker',
    'wombat', 'shark', 'toad', 'frog', 'penguin', 'newt', 'cow', 'okapi',
];

let selectedWord = words[Math.floor(Math.random() * words.length)];

function HangmanGame() {
    const [playable, setPlayable] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        const handleKeydown = event => {
            const { key, keyCode } = event;

            if (playable && keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase();

                if (selectedWord.includes(letter)) {
                    if (!correctLetters.includes(letter)) {
                        setCorrectLetters(currentLetters => [...currentLetters, letter]);
                    } else {
                        show(setShowNotification);
                    }
                } else {
                    if (!wrongLetters.includes(letter)) {
                        setWrongLetters(wrongLetters => [...wrongLetters, letter]);
                    } else {
                        show(setShowNotification);
                    }
                }
            }
        }
        window.addEventListener('keydown', handleKeydown);

        return () => window.removeEventListener('keydown', handleKeydown);
    }, [correctLetters, wrongLetters, playable]);


    function playAgain(){
        setPlayable(true);

        //Empty Arrays
        setCorrectLetters([]);
        setWrongLetters([]);

        const random = Math.floor(Math.random() * words.length);
        selectedWord = words[random];
    }

    return (
        <>
            <div className='hangman-container-background'>
                <div className='hangman-container'>
                    <HangmanHeader />
                    <HangmanFigure wrongLetters={wrongLetters} />
                    <HangmanWrongLetters wrongLetters={wrongLetters} />
                    <HangmanWord selectedWord={selectedWord} correctLetters={correctLetters} />
                    <HangmanNotification showNotification={showNotification} />
                </div>
                <HangmanPopup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord=
                {selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
            </div>   
        </>
    )
}

export default HangmanGame;