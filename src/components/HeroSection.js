import React from 'react'
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>Portfolio</h1>
            <p>Feel free to explore</p>
            <div className="hero-btns">
                <Button className='btns' direct='/minigames' buttonStyle='btn--outline'
                    buttonSize='btn--large'>Mini Games?</Button>
            </div>
        </div>
    )
}

export default HeroSection