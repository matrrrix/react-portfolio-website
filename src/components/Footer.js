import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Where to reach me
                </p>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <a href="https://www.instagram.com/loganwolff_/"
                            className='social-icon-link instagram'
                            target='_blank'
                            rel="noreferrer"
                            aria-label='Instagram'
                        >
                            Instagram    <i className='fab fa-instagram' />
                        </a>
                    </div>
                    <div className='footer-link-items'>
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
                    <div className='footer-link-items'>
                        <a href="https://github.com/matrrrix"
                            className='social-icon-link github'
                            target='_blank'
                            rel="noreferrer"
                            aria-label='GitHub'
                        >
                            GitHub    <i className='fab fa-github' />
                        </a>
                    </div>
                    <div className='footer-link-items'>
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
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            Logan Wolff &nbsp; <i className='fas fa-paw' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer