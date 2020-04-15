import React from 'react';
import { Link } from 'react-router-dom';
import './Forms.css';
import { Button, Form, Col, InputGroup } from 'react-bootstrap';

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
                <Form>
                    <div class="forms">
                        <h2>Listing successfully uploaded</h2>
                        <hr></hr>
                        <div class="buttons">
                            <Button variant="outline-info" size="sm" onClick={this.props.back}> Back </Button>
                            <Button variant="outline-info" size="sm">
                                <a href="/MyListings">
                                    Listings
                                    </a>
                            </Button>
                        </div>
                    </div>
                </Form>
            </div >
        )
    };
}

export default Subleaser5;
