import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';
import { Button } from 'react-bootstrap';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <h2>Welcome to</h2>
                <h1>SUBLIST</h1>
                <h4>
                    I am looking to
                </h4>
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
