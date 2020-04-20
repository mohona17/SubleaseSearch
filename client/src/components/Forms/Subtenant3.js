import React from 'react';
import { Link } from 'react-router-dom';
import './Forms.css';
import { Button, Form, Col, InputGroup } from 'react-bootstrap';

class Subtenant3 extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        if (this.props.currentStep != 5) {
            return null
        }

        return (
            <div>
                <Form>
                    <div class="forms">
                        All done. Click to go to your listings.
                        <br />
                        <div class="buttons">
                            <button class="back_btn" onClick={this.props.back}> Back </button>
                            <button class="next_btn">
                                <a href="/Listings">
                                    Listings
                                </a>
                            </button>
                        </div>
                    </div>
                </Form>
            </div>
        )
    };
}

export default Subtenant3;
