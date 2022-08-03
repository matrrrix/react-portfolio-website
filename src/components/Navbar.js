import React, { useState } from 'react';
import {Link} from 'react-router-dom';
//import { Button } from './Button';
//if a button is necessary in the navbar, also add ", useEffect" in the React import
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false)
    //const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // const showButton = () => {
    //     if(window.innerWidth <= 1000){
    //         setButton(false)
    //     } else {
    //         setButton(true);
    //     }
    // };

    // useEffect(() => {
    //     showButton()
    // }, []);

    // window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Logan Wolff &nbsp; <i className="fas fa-paw"></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/minigames' className='nav-links' onClick={closeMobileMenu}>
                                Mini Games
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/socials' className='nav-links' onClick={closeMobileMenu}>
                                Socials
                            </Link>
                        </li>
                    </ul> 
                </div>
            </nav>
        </>
    )
}
//{button && <Button buttonStyle='btn--outline'>SIGN UP </Button>} : this used to go under </ul>
export default Navbar