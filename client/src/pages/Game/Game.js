import React, { Component } from 'react';
import './Game.css';
import avengers from './avengers.json';
import Avenger from '../../components/AvengerBtn/avengerBtn';

class Game extends Component {
    state = {
        avengers,
        avengersClicked: [],
        score: 0,
        losses: 0
    };

    clickedAvenger = id => {
        console.log(id);
    }

    render() {
        return (
            <div>
                <div className='container-fluid' id='fullPage'>
                    <div className='jumbotron-fluid headerJumbo'>
                        <div className='col-lg-4 col-md-4 col-sm-4 scoreCol'>
                            <p>Score: {this.state.score}</p>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-4 snapCol'>

                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-4 lossCol'>
                            <p>Losses: {this.state.losses}</p>
                        </div>
                    </div>
                    <div className='charButtonContainer'>
                        {this.state.avengers.map(avenger => (
                            <Avenger id={avenger.id} key={avenger.id} url={avenger.url} clickedAvenger={this.clickedAvenger} />
                        ))}
                    </div>

                </div>
            </div>


        );
    }
}

export default Game;