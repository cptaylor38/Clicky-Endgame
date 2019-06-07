import React from 'react';
import { Link } from 'react-router-dom';
import './welcomeBtn.css';

function WelcomeBtn() {
    return (
        <Link to='/game' style={{ textDecoration: 'none' }}>
            <div className='btnContainer'>
                <button className='welomeBtn' id='welcomeBtn' type='button'>
                    <p>Play</p>
                </button>
            </div>
        </Link>
    );
}

export default WelcomeBtn;