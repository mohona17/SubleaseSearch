import React from 'react';
import { Link } from 'react-router-dom';
import './Forms.css';
import { disconnect } from 'mongoose';
import { Button, Form, Col, InputGroup } from 'react-bootstrap';

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

    nextPage = (e) => {
        e.preventDefault();
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
            errorMessage = errorMessage.concat("*Some fields were left blank. ");
        if (milesLow >= milesHigh)
            errorMessage = errorMessage.concat("*Ensure that the range for miles is correct. ");

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
                <Form>
                    <div class="forms">
                        <h2>What are you looking for?</h2>
                        <hr></hr>

                        <Form.Label><h5>Budget per month</h5></Form.Label>
                        <Form.Control input
                            type="number"
                            placeholder="$"
                            value={budget}
                            onChange={this.onTextboxChangeBudget}
                        ></Form.Control><br />

                        <Form.Label><h5>Distance</h5></Form.Label>
                        <Form.Control input
                            type="number"
                            placeholder="0"
                            value={milesLow}
                            min="0"
                            step="1"
                            onChange={this.onTextboxChangeMilesLow}
                        ></Form.Control>
                        <p>to</p>
                        <Form.Control input
                            type="number"
                            placeholder="100"
                            min="0"
                            step="1"
                            value={milesHigh}
                            onChange={this.onTextboxChangeMilesHigh}
                        ></Form.Control><br />

                        <h4>Layout</h4>
                        {/* <Form.Control input
                        type="number"
                        placeholder="#"
                        min="0"
                        step="1"
                        value={beds}
                        onChange={this.onTextboxChangeBeds}
                        ></Form.Control><br /> */}

                        <h5># Beds</h5>
                        <Form.Control input
                            type="number"
                            placeholder="#"
                            min="0"
                            step="1"
                            value={beds}
                            onChange={this.onTextboxChangeBeds}
                        ></Form.Control><br />

                        <h5># Baths</h5>
                        <Form.Control input
                            type="number"
                            placeholder="#"
                            min="0"
                            step="1"
                            value={bath}
                            onChange={this.onTextboxChangeBath}
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

export default Subtenant1;
