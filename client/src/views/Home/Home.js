import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';
import { Button } from 'react-bootstrap';
import welcome from './welcometo.png'

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img class="welcomeImage" src={welcome} alt={"logo"}></img>
                <br></br>
                <h4>
                    I am looking to
                </h4>
                <br></br>
                <button class="rent_btn"><a href="/Subleaser">
                    Rent out my apartment
                </a></button>
                <br />

                <button class="temp_btn">
                    <a href="/Subtenant">
                        Find a temporary apartment
                </a>
                </button>

                <div class="return_btn">
                    <a href="/Login">
                        I am a returning user
                </a>
                </div>

            </header>
        </div>
    );
}

export default Home;
