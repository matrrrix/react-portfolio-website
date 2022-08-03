import React from 'react'
import '../App.css';
import './HeroSectionSocial.css';

function HeroSectionSocial() {
    return (
        <div className='hero-container-social'>
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>This is me!</h1>
            <div className='footer-container-social'>
                <div className='footer-links-social'>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items-social'>
                            <a href="https://www.instagram.com/loganwolff_/"
                                className='social-icon-link instagram'
                                target='_blank'
                                rel="noreferrer"
                                aria-label='Instagram'
                            >
                                Instagram    <i className='fab fa-instagram' />
                            </a>
                        </div>
                        <div className='footer-link-items-social'>
                            <a href="https://twitter.com/loganwolffok"
                                className='social-icon-link twitter'
                                target='_blank'
                                rel="noreferrer"
                                aria-label='Twitter'
                            >
                                Twitter    <i className='fab fa-twitter' />
                            </a>
                        </div>
                    </div>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items-social'>
                            <a href="https://github.com/matrrrix"
                                className='social-icon-link github'
                                target='_blank'
                                rel="noreferrer"
                                aria-label='GitHub'
                            >
                                GitHub    <i className='fab fa-github' />
                            </a>
                        </div>
                        <div className='footer-link-items-social'>
                            <a href="https://www.linkedin.com/in/logan-wolff-5a66971a0/"
                                className='social-icon-link linkedin'
                                target='_blank'
                                rel="noreferrer"
                                aria-label='LinkedIn'
                            >
                                LinkedIn    <i className='fab fa-linkedin' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSectionSocial