import React from 'react';
import { Link } from 'react-router-dom';
import './Forms.css';

class Subleaser5 extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        if (this.props.currentStep != 7) {
            return null
        }

        return (
            < div >
                <h2>Listing successfully uploaded</h2>

                <button onClick={this.props.back}> Back </button>
                <button>
                    <a href="/MyListings">
                        Listings
                </a>
                </button>
            </div >
        )
    };
}

export default Subleaser5;
