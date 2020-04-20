import React from 'react';
import logo from '../../assets/logo.svg';
import './Profile.css';
import MyListings from '../Listings/MyListings'
import Messages from '../../components/Messages/Chat'
import MyFavorites from '../MyFavorites/MyFavorites';
import Header from '../../components/Header/Header'

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Header></Header>
                <h1>My Profile</h1>
                <div class="row justify-content-md-center">
                    <div class="col col-sm-2 text-center">
                        <img class="image" src="https://images.squarespace-cdn.com/content/v1/54bbd50ce4b05e8a36418abc/1533226867020-NALD4HA8GBL3IUIQE9PM/ke17ZwdGBToddI8pDm48kMh3mVmBaCAeGwqCLG3iONRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PITeQtWPcxF65ANawkK25DREOmFck9peR6QL8AnpRiPJE/rachel-rouhana-profile-picture-circle.png"></img>
                    </div>
                    <div class="col col-sm-2 text-center">
                        <h3>Jane Doe</h3>
                        <h5>jdoe@ufl.edu</h5>
                        <h5>(555)-555-5555</h5>
                    </div>
                </div>
            </div>
        )
    };
}

export default Profile;