import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.png';

 const Header = () => {
     return (

          <div className='topnav'>
              <nav class="navbar">
                  <img class="image" src={logo} alt={"logo"}></img>
                 <a class="navbar-brand" href="/Profile">Profile</a>
                 <a class="navbar-brand" href="/Listings">Listings</a>
                 <a class="navbar-brand" href="/MyFavorites">Favorites</a>
                 <a class="navbar-brand" href="/Messages">Messages</a>
             </nav>
         </div>
    )
}

export default Header;
