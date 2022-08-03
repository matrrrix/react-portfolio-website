import React from 'react';

const HangmanWord = ({ selectedWord, correctLetters }) => {

    return (
        <div className="word">
            {selectedWord.split('').map((letter, i) => {
                return (
                    <span className="letter" key={i}>
                        {correctLetters.includes(letter) ? letter: ''}
                    </span>
                )
            })}
        </div>
    )
}

export default HangmanWord