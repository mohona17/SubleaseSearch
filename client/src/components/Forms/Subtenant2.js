import React from 'react';
import { Link } from 'react-router-dom';
import './Forms.css';
import { Button, Form, Col, InputGroup } from 'react-bootstrap';

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

    nextPage = (e) => {
        e.preventDefault();
        const {
            utilities,
            pets,
            roommates,
        } = this.state;


        var errorMessage = [];

        if (roommates == null)
            errorMessage = errorMessage.concat("*Make sure to specify number of roommates");

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
                <Form>
                    <div class="forms">
                        <h2>Refine your results!</h2>
                        <hr></hr>
                        <Form.Control input
                            type="checkbox"
                            value={utilities}
                            onChange={this.onTextboxChangeUtilities}
                        ></Form.Control>
                        <h5>utilities included</h5>
                        <br />
                        <Form.Control input
                            type="checkbox"
                            value={pets}
                            onChange={this.onTextboxChangePets}
                        ></Form.Control>
                        <h5>Pets allowed</h5>
                        <br />
                        <h5>Number of roommates</h5>
                        <Form.Control input
                            type="number"
                            placeholder="0"
                            min="0"
                            step="1"
                            value={roommates}
                            onChange={this.onTextboxChangeRoommates}
                        ></Form.Control><br />

                        <div class="buttons">
                            <button class="back_btn" onClick={this.props.back}> Back </button>
                            <button class="back_btn" onClick={this.nextPage}> Next </button>
                        </div>
                    </div>

                    <div class="error_msg">
                        {error}
                    </div>
                </Form>
            </div>
        )
    };
}

export default Subtenant2;
