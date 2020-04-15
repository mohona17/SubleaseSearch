import React from 'react';
import { Link } from 'react-router-dom';
import './Forms.css';
import { Button, Form, Col, InputGroup } from 'react-bootstrap';

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
                <Form>
                    <h2>Please add more information</h2>
                    <hr></hr>
                    <div class="forms">
                        <Form.Control input
                            type="checkbox"
                            value={furnished}
                            onChange={this.onTextboxChangeFurnished}
                        ></Form.Control>
                        <h5>Furnished</h5>
                        <br />

                        <Form.Control input
                            type="checkbox"
                            value={pets}
                            onChange={this.onTextboxChangePets}
                        ></Form.Control>

                        <Form.Label><h5>Pets allowed</h5></Form.Label>
                        <br />

                        <Form.Label><h5>Number of roommates</h5></Form.Label>
                        <Form.Control input
                            type="number"
                            placeholder="0"
                            min="0"
                            step="1"
                            value={roommates}
                            onChange={this.onTextboxChangeRoommates}
                        ></Form.Control><br />

                        <Form.Control input
                            type="checkbox"
                            value={utilities}
                            onChange={this.onTextboxChangeUtilities}
                        ></Form.Control>
                        <h5>Utilities included</h5>

                        <div class="buttons">
                            <button class="back_btn" onClick={this.props.back}> Back </button>
                            <button class="next_btn" onClick={this.nextPage}> Next </button>
                        </div>
                    </div>

                    <div class="error_msg">
                        {error}
                    </div>
                </Form>
            </div >
        )
    };
}

export default Subleaser2;
