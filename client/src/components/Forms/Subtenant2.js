import React from 'react';
import { Link } from 'react-router-dom';
import './Forms.css';

class Subtenant2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            utilities: false,
            pets: false,
            roommates: null,
            error: [],
        };

        this.onTextboxChangeUtilities = this.onTextboxChangeUtilities.bind(this);
        this.onTextboxChangePets = this.onTextboxChangePets.bind(this);
        this.onTextboxChangeRoommates = this.onTextboxChangeRoommates.bind(this);
    }

    onTextboxChangeUtilities(event) {
        if (this.state.utilities == true) {
            this.setState({
                utilities: false,
            });
        }
        else {
            this.setState({
                utilities: true,
            });
        }
    }
    onTextboxChangePets(event) {
        if (this.state.pets == true) {
            this.setState({
                pets: false,
            });
        }
        else {
            this.setState({
                pets: true,
            });
        }
    }
    onTextboxChangeRoommates(event) {
        this.setState({
            roommates: event.target.value,
        });
    }

    nextPage = () => {
        const {
            utilities,
            pets,
            roommates,
        } = this.state;


        var errorMessage = [];

        if (roommates == null)
            errorMessage = errorMessage.concat("Make sure to specify number of roommates");

        console.log(errorMessage)
        this.setState({
            error: errorMessage
        }, () => {
            if (errorMessage.length == 0) this.props.next();
        });
    }

    render() {
        if (this.props.currentStep != 4) {
            return null
        }

        const {
            utilities,
            pets,
            roommates,
            error,
        } = this.state;
        return (
            <div>
                <h2>Refine your results!</h2>
                <hr></hr>
                <input
                    type="checkbox"
                    value={utilities}
                    onChange={this.onTextboxChangeUtilities}
                ></input>
                <h4>utilities included</h4>
                <br />
                <input
                    type="checkbox"
                    value={pets}
                    onChange={this.onTextboxChangePets}
                ></input>
                <h4>pets allowed</h4>
                <br />
                <h4>Number of roommates:</h4>
                <input
                    type="number"
                    placeholder="0"
                    min="0"
                    step="1"
                    value={roommates}
                    onChange={this.onTextboxChangeRoommates}
                ></input><br />

                <button onClick={this.props.back}> Back </button>
                <button onClick={this.nextPage}> Next </button>

            <div>
                {error}
            </div>
            </div>
        )
    };
}

export default Subtenant2;
