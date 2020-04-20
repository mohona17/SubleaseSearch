import React from 'react';
import { Link } from 'react-router-dom';
import './Forms.css';
import { Button, Form, Col, InputGroup } from 'react-bootstrap';

class Subleaser3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            preferences: false,
            genderMale: false,
            genderFemale: false,
            edu: false,
        };

        this.onTextboxChangePreferences = this.onTextboxChangePreferences.bind(this);
        this.onTextboxChangeGenderMale = this.onTextboxChangeGenderMale.bind(this);
        this.onTextboxChangeGenderFemale = this.onTextboxChangeGenderFemale.bind(this);
        this.onTextboxChangeedu = this.onTextboxChangeedu.bind(this);
    }

    onTextboxChangePreferences(event) {
        if (this.state.preferences == true) {
            //Turning false, must clear other preferences
            this.setState({
                preferences: false,
                genderFemale: false,
                genderMale: false,
                edu: false,
            });
        }
        else {
            this.setState({
                preferences: true,
            });
        }
    }
    onTextboxChangeGenderMale(event) {
        //uncheck
        if (this.state.genderMale == true) {
            this.setState({
                genderMale: false,
            });
        }
        //check
        else {
            this.setState({
                genderMale: true,
            });
        }
    }
    onTextboxChangeGenderFemale(event) {
        //uncheck
        if (this.state.genderFemale == true) {
            this.setState({
                genderFemale: false,
            });
        }
        //check
        else {
            this.setState({
                genderFemale: true,
            });
        }
    }
    onTextboxChangeedu(event) {
        if (this.state.edu == true) {
            this.setState({
                edu: false,
            });
        }
        else {
            this.setState({
                edu: true,
            });
        }
    }
    nextPage = () => {
        const {
            genderFemale,
            genderMale,
            edu,
            preferences
        } = this.state;


        var errorMessage = [];

        if (genderFemale && genderMale)
            errorMessage = errorMessage.concat("Make sure to only choose one gender");

        console.log(errorMessage)
        this.setState({
            error: errorMessage
        }, () => {
            if (errorMessage.length == 0) this.props.next();
        });
    }
    render() {
        if (this.props.currentStep != 5) {
            return null
        }

        const {
            preferences,
            genderFemale,
            genderMale,
            edu,
            error,
        } = this.state;

        var preferenceForm = <div></div>;
        if (preferences == true) {
            preferenceForm = (
                <div>
                    <h3>Gender restriction</h3>
                    <br />
                    <h4>Female</h4>
                    <input
                        type="checkbox"
                        value={genderFemale}
                        onChange={this.onTextboxChangeGenderFemale}
                    ></input>
                    <h4>Male</h4>
                    <input
                        type="checkbox"
                        value={genderMale}
                        onChange={this.onTextboxChangeGenderMale}
                    ></input>
                    <br />
                    <hr></hr>
                    <input
                        type="checkbox"
                        value={edu}
                        onChange={this.onTextboxChangeedu}
                    ></input>
                    <h3>Only allow users with an active .edu account to contact</h3>
                </div>
            );
        }
        return (

            < div >
                <Form>
                    <div class="forms">
                        <h2>Do you have preferences for a subtenant? Check the box if so</h2>
                        <hr></hr>
                        <Form.Control input
                            type="checkbox"
                            value={preferences}
                            onChange={this.onTextboxChangePreferences}
                        ></Form.Control>
                        {preferenceForm}

                        <div class="buttons">
                            <Button variant="outline-info" size="sm" onClick={this.props.back}> Back </Button>
                            <Button variant="outline-info" size="sm" onClick={this.nextPage}> Next </Button>
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

export default Subleaser3;
