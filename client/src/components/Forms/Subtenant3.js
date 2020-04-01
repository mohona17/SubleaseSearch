import React from 'react';
import { Link } from 'react-router-dom';
import './Forms.css';

class Subtenant3 extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        if (this.props.currentStep !== 5) {
            return null
        }

        
        return (
            <div>
                All done. Click to go to your listings.
                <button onClick={this.props.action}> Finish </button>

            </div>
        )
    };
}

export default Subtenant3;
