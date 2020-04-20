import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    //Header for subleaser only, so that is why there is no link to favorites
    return (
        <div className='topnav'>
            <nav class="navbar navbar-dark bg-success">
                <a class="navbar-brand" href="/Profile">My Profile</a>
                <a class="navbar-brand" href="/MyListings">My Listings</a>
                <a class="navbar-brand" href="/Messages">Messages</a>
            </nav>
        </div>
    )
}

export default Header;
