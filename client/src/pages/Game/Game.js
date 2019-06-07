import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        console.log('clickedAvenger function' + id);
        this.state.avengers.sort(() => Math.random() - 0.5);
        return (
            !this.state.avengersClicked.includes(id) ? this.newlyClicked(id) : this.alreadyClicked()
        )
    }

    alreadyClicked = () => {
        let addLoss = this.state.losses + 1;
        this.setState({
            score: 0,
            losses: addLoss,
            avengersClicked: []
        })
    }

    newlyClicked = (id) => {
        let newArray = [...this.state.avengersClicked, id];
        //newArray.push(id);
        console.log(newArray);
        console.log('newlyClicked function' + id);
        let newScore = this.state.score + 1;
        this.setState({
            avengersClicked: newArray,
            score: newScore
        });
    }

    render() {
        return (
            <div>
                <div className='container-fluid' id='fullPage'>
                    <div className='svgHolder' style={{ background: `url('https://www.freeiconspng.com/uploads/avengers-icon-7.png')`, backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
                        <div className='jumbotron-fluid headerJumbo'>
                            <div className='col-lg-4 col-md-4 col-sm-4 scoreCol'>
                                <p id='scoreText'>Score: {this.state.score}</p>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-4 middleCol'>
                                <div className='snapCol'></div>
                                <Link to='/' id='homeLink'>Home</Link>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-4 lossCol'>
                                <p id='lossText'>Losses: {this.state.losses}</p>
                            </div>
                        </div>
                        <div className='charButtonContainer'>
                            {this.state.avengers.map(avenger => (
                                <Avenger object={avenger} id={avenger.id} key={avenger.id} url={avenger.url} clickedAvenger={this.clickedAvenger} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Game;