import React from 'react';
import './Button.css';
// import { Link } from 'react-router-dom'; 
import { Link, animateScroll as scroll } from 'react-scroll';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize,
    path,
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    
    return (
        <Link className='btn-mobile'
            activeClass="active"
            to={path}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
            <button  
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
        
    )
};