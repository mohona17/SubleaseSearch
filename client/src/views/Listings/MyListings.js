import React from 'react';
import './Listings.css';

class Listings extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        if (this.props.currentStep !== 8) {
            return null
        }

        
        return (
            <div>
                My listings go here
            </div>
        )
    };
}

export default Listings;
