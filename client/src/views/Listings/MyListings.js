import React from 'react';
import './Listings.css';
import Header from '../../components/Header/HeaderSubleaser'

class MyListings extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Header></Header>
                My listings go here
            </div>
        )
    };
}

export default MyListings;
