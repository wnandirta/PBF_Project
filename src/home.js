import React, { Component } from "react";

import posImage from './Image/posImage.jpeg';
import './styles.css';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div className='home__section'>
                        <img src={posImage}className="App-logo" alt="posImage"/>

                </div>

            </div>
        );
    }
}

export default Home;