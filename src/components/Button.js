import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    direct = '/sign-up'
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    const checkDirect = SIZES.includes(direct) ? direct : '/sign-up';
    return (
        <Link to={direct} className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkDirect}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    )
};