import React, { Component } from "react";
import './App.css';
import posImage from './Image/posImage.jpeg';
import './home.css';

class Home extends Component {
    render() {
        return ( 
            <div className='home-container'>
                        <img src={posImage}className="image" width="750" height="500"/>

            </div>
        );
    }
}

export default Home;