import React from 'react';
import './Listings.css';
import Header from '../../components/Header/Header'

class Listings extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {        
        return (
            <div>
                <Header></Header>
                Listings go here
            </div>
        )
    };
}

export default Listings;
