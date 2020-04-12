import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <h2>Welcome to</h2>
                <h1>Sublist</h1>
                <h3>
                    I am looking to
                </h3>
                <button><a href="/Subleaser">
                    Rent out my apartment
                </a></button>

                <button>
                    <a href="/Subtenant">
                        Find a temporary apartment
                </a>
                </button>

                <button>
                    <a href="/Login">
                        I am a returning user
                </a>
                </button>

            </header>
        </div>
    );
}

export default Home;
