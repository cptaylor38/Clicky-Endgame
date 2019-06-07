import React from 'react';
import './Welcome.css';
import Button from '../../components/WelcomeBtn/welcomeBtn';

function Welcome() {
    return (
        <div className='container-fluid bodyContainer'>
            <div className='svgHolder' style={{ background: `url('https://www.freeiconspng.com/uploads/avengers-icon-7.png')`, backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
                <div className='container contentContainer'>
                    <div className='row titleRow'>
                        <h1 id='title'>Clicky Endgame</h1>
                    </div>
                    <Button />
                </div>
            </div>
        </div>
    );
}

export default Welcome;