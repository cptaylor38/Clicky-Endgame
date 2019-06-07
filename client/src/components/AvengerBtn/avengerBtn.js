import React from 'react';
import './avengerBtn.css';

function Avenger(props) {
    const style = {
        background: `url(${props.url})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
    }
    return (
        <button className='imageBtn' style={style} onClick={props.clickedAvenger(props.id)}></button>
    );
}

export default Avenger;