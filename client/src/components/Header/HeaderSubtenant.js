import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.png';

const Header = () => {
    return (
        <div className='topnav'>
            <nav class="navbar navbar-dark bg-success">
                <img class="image" src={logo} alt={"logo"}></img>
                <a class="navbar-brand" href="/ProfileSubtenant">My Profile</a>
                <a class="navbar-brand" href="/Listings">My Listings</a>
                <a class="navbar-brand" href="/MyFavorites">My Favorites</a>
                <a class="navbar-brand" href="/Messages">Messages</a>
            </nav>
        </div>
    )
}

export default Header;
