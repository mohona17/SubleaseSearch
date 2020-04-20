import React from 'react';
import { Link } from 'react-router-dom';
import './Forms.css';
import { Button, Form, Col, InputGroup } from 'react-bootstrap';

class Subleaser1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rent: 0,
            address: '',
            beds: 0,
            bath: 0,
        };

        this.onTextboxChangeRent = this.onTextboxChangeRent.bind(this);
        this.onTextboxChangeAddress = this.onTextboxChangeAddress.bind(this);
        this.onTextboxChangeBeds = this.onTextboxChangeBeds.bind(this);
        this.onTextboxChangeBath = this.onTextboxChangeBath.bind(this);
    }

    onTextboxChangeRent(event) {
        this.setState({
            rent: event.target.value,
        });
    }
    onTextboxChangeAddress(event) {
        this.setState({
            address: event.target.value,
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
            rent,
            address,
            beds,
            bath,
            error,
        } = this.state;

        var errorMessage = [];

        //TODO CHECK ADDRESS
        if (rent == 0 || address == '' || beds == 0 || bath == 0)
            errorMessage = errorMessage.concat("*Some fields were left blank");

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
            rent,
            address,
            beds,
            bath,
            error,
        } = this.state;
        return (
            <div>
                <Form>
                    <div class="forms">
                        <h2>Tell us a little bit more about your sublease</h2>
                        <hr></hr>
                        <Form.Group controlId="rent">
                            <h5>Monthly rent</h5>
                            <Form.Control input
                                type="number"
                                placeholder="$"
                                value={rent}
                                onChange={this.onTextboxChangeRent}
                            ></Form.Control><br />
                        </Form.Group>

                        <Form.Group controlId="address">
                            <h5>Address</h5>
                            <Form.Control input
                                type="address"
                                placeholder="1234 NW 1st Street"
                                value={address}
                                onChange={this.onTextboxChangeAddress}
                            ></Form.Control><br />
                        </Form.Group>

                        <h4>Layout</h4>
                        <Form.Group controlId="beds">
                            <h5># Beds</h5>
                            <Form.Control input
                                type="number"
                                placeholder="#"
                                min="0"
                                step="1"
                                value={beds}
                                onChange={this.onTextboxChangeBeds}
                            ></Form.Control><br />
                        </Form.Group>

                        <Form.Group controlId="baths">
                            <h5># Baths</h5>
                            <Form.Control input
                                type="number"
                                placeholder="#"
                                min="0"
                                step="1"
                                value={bath}
                                onChange={this.onTextboxChangeBath}
                            ></Form.Control><br />
                        </Form.Group>

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

export default Subleaser1;
