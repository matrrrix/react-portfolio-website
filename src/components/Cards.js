import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Mini Games</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-2.jpg"
              text="Fun Quiz"
              label="Mobile and Desktop"
              path='/minigames/quiz'
            />
            <CardItem
              src="images/img-9.jpg"
              text="Animal Hangman"
              label="Desktop Only"
              path='/minigames/hangman'
            />
          </ul>
          <ul className="cards__items">
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
