import React from 'react';
import './avengerBtn.css';
import PropTypes from 'prop-types';

const Avenger = props => {
    const style = {
        background: `url(${props.url})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
    }
    return (
        <button className='imageBtn' style={style} onClick={() => props.clickedAvenger(props.id)}></button>
    );
}

Avenger.propTypes = { object: PropTypes.object.isRequired }

export default Avenger;