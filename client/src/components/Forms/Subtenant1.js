import React from 'react';
import { Link } from 'react-router-dom';
import './Forms.css';
import { disconnect } from 'mongoose';

class Subtenant1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            budget: null,
            milesLow: null,
            milesHigh: null,
            beds: 0,
            bath: 0,
            error: [],
        };

        this.onTextboxChangeBudget = this.onTextboxChangeBudget.bind(this);
        this.onTextboxChangeMilesLow = this.onTextboxChangeMilesLow.bind(this);
        this.onTextboxChangeMilesHigh = this.onTextboxChangeMilesHigh.bind(this);
        this.onTextboxChangeBeds = this.onTextboxChangeBeds.bind(this);
        this.onTextboxChangeBath = this.onTextboxChangeBath.bind(this);
    }

    onTextboxChangeBudget(event) {
        this.setState({
            budget: event.target.value,
        });
    }
    onTextboxChangeMilesLow(event) {
        this.setState({
            milesLow: event.target.value,
        });
    }
    onTextboxChangeMilesHigh(event) {
        this.setState({
            milesHigh: event.target.value,
        });
    }
    onTextboxChangeBeds(event) {
        this.setState({
            beds: event.target.value,
        });
    }
    onTextboxChangeBath(event) {
        this.setState({
            bath: event.target.value,
        });
    }

    nextPage = () => {
        const {
            budget,
            milesHigh,
            milesLow,
            beds,
            bath
        } = this.state;


        var errorMessage = [];


        console.log(budget)
        if (budget == null || milesHigh == null || milesLow == null || bath == 0 || beds == 0)
            errorMessage = errorMessage.concat("Some fields were left blank. ");
        if (milesLow>=milesHigh)
            errorMessage = errorMessage.concat("Ensure that the range for miles is correct. ");

        console.log(errorMessage)
        this.setState({
            error: errorMessage
        }, () => {
            if (errorMessage.length == 0) this.props.next();
        });
    }

    render() {
        if (this.props.currentStep != 3) {
            return null
        }

        const {
            budget,
            milesLow,
            milesHigh,
            beds,
            bath,
            error,
        } = this.state;
        return (
            <div>
                <h2>What are you looking for?</h2>
                <hr></hr>
                <h3>Budget per month:</h3>
                <input
                    type="number"
                    placeholder="$"
                    value={budget}
                    onChange={this.onTextboxChangeBudget}
                ></input><br />
                <h3>Distance:</h3>
                <input
                    type="number"
                    placeholder="0"
                    value={milesLow}
                    min="0"
                    step="1"
                    onChange={this.onTextboxChangeMilesLow}
                ></input>
                <h4>to</h4>
                <input
                    type="number"
                    placeholder="100"
                    min="0"
                    step="1"
                    value={milesHigh}
                    onChange={this.onTextboxChangeMilesHigh}
                ></input><br />
                <h3>Layout:</h3>
                <input
                    type="number"
                    placeholder="#"
                    min="0"
                    step="1"
                    value={beds}
                    onChange={this.onTextboxChangeBeds}
                ></input>
                <h4>beds</h4>
                <br />
                <input
                    type="number"
                    placeholder="#"
                    min="0"
                    step="1"
                    value={bath}
                    onChange={this.onTextboxChangeBath}
                ></input>
                <h4>baths</h4>
                <br />

                <button onClick={this.props.back}> Back </button>
                <button onClick={this.nextPage}> Next </button>
                <div>
                    {error}
                </div>

            </div>
        )
    };
}

export default Subtenant1;
