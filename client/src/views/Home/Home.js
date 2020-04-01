import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <h2>Welcome to ...</h2>
                <h1>SUBLIST</h1>
                <p>
                    I am looking to...
                </p>
                <a href="/Subleaser">
                    Rent out my apartment
                </a>
                <a href="/Subtenant">
                    Find a temporary apartment
                </a>

            </header>
        </div>
    );
}

export default Home;
