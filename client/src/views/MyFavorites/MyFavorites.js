import React from 'react';
import logo from '../../assets/logo.svg';
import './MyFavorites.css';
import Header from '../../components/Header/HeaderSubtenant'

class MyFavorites extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Header></Header>
                <h1>My Favorites</h1>
            </div>
        )
    };
}

export default MyFavorites;