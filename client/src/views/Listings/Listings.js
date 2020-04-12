import React from 'react';
import './Listings.css';

class Listings extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        if (this.props.currentStep != 6) {
            return null
        }

        
        return (
            <div>
                Listings go here
            </div>
        )
    };
}

export default Listings;
