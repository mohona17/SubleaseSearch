import React from 'react';
import { Link } from 'react-router-dom';
import './Forms.css';

class Subleaser2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            furnished: false,
            utilities: false,
            pets: false,
            roommates: null,
        };

        this.onTextboxChangeFurnished = this.onTextboxChangeFurnished.bind(this);
        this.onTextboxChangeUtilities = this.onTextboxChangeUtilities.bind(this);
        this.onTextboxChangePets = this.onTextboxChangePets.bind(this);
        this.onTextboxChangeRoommates = this.onTextboxChangeRoommates.bind(this);
    }

    onTextboxChangeFurnished(event) {
        if (this.state.furnished == true) {
            this.setState({
                furnished: false,
            });
        }
        else {
            this.setState({
                furnished: true,
            });
        }
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
            furnished,
            utilities,
            pets,
            roommates
        } = this.state;


        var errorMessage = [];

        console.log(roommates)
        if (roommates == null)
            errorMessage = errorMessage.concat("Make sure all fields are complete");

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
            furnished,
            utilities,
            pets,
            roommates,
            error,
        } = this.state;
        return (
            <div>
                <h2>Add more information!</h2>
                <hr></hr>
                <input
                    type="checkbox"
                    value={furnished}
                    onChange={this.onTextboxChangeFurnished}
                ></input>
                <h4>furnished</h4>
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
                <input
                    type="checkbox"
                    value={utilities}
                    onChange={this.onTextboxChangeUtilities}
                ></input>
                <h4>utilities included</h4>

                <button onClick={this.props.back}> Back </button>
                <button onClick={this.nextPage}> Next </button>
                <div>
                    {error}
                </div>
            </div>
        )
    };
}

export default Subleaser2;
