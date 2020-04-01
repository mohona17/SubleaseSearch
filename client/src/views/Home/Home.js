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
                <a href="/SubleaserForm">
                    Rent out my apartment
                </a>
                <a href="/SubtenantForm">
                    Find a temporary apartment
                </a>

            </header>
        </div>
    );
}

export default Home;
