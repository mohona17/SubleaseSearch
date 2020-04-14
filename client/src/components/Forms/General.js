import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Forms.css';
import validator from 'validator'
import { Button, Form, Col, InputGroup } from 'react-bootstrap';

class General extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            preferredEmail: '',
            schoolEmail: '',
            phoneNumber: '',
            password: '',
            passwordConfirmation: '',
            error: [],
        };

        this.onTextboxChangeFirstName = this.onTextboxChangeFirstName.bind(this);
        this.onTextboxChangeLastName = this.onTextboxChangeLastName.bind(this);
        this.onTextboxChangePreferredEmail = this.onTextboxChangePreferredEmail.bind(this);
        this.onTextboxChangeSchoolEmail = this.onTextboxChangeSchoolEmail.bind(this);
        this.onTextboxChangePhoneNumber = this.onTextboxChangePhoneNumber.bind(this);
        this.onTextboxChangePassword = this.onTextboxChangePassword.bind(this);
        this.onTextboxChangeConfirmedPassword = this.onTextboxChangeConfirmedPassword.bind(this);
    }

    onTextboxChangeFirstName(event) {
        if (/\d/.test(event.target.value)) this.props.handleError("First name cannot have number")
        else {
            this.setState({
                firstName: event.target.value,
            });
        }
    }
    onTextboxChangeLastName(event) {
        if (/\d/.test(event.target.value)) this.props.handleError("Last name cannot have number")
        else {
            this.setState({
                lastName: event.target.value,
            });
        }
    }
    onTextboxChangePreferredEmail(event) {
        this.setState({
            preferredEmail: event.target.value,
        });

    }
    onTextboxChangeSchoolEmail(event) {
        this.setState({
            schoolEmail: event.target.value,
        });
    }
    onTextboxChangePhoneNumber(event) {
        this.setState({
            phoneNumber: event.target.value,
        });
    }
    onTextboxChangePassword(event) {
        this.setState({
            password: event.target.value,
        });
    }
    onTextboxChangeConfirmedPassword(event) {
        this.setState({
            passwordConfirmation: event.target.value,
        });
    }
    validateEmail(email) {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return expression.test(String(email).toLowerCase())
    }
    validatePhoneNumber = (number) => {
        const isValidPhoneNumber = validator.isMobilePhone(number)
        return (isValidPhoneNumber)
    }

    nextPage = () => {
        const {
            firstName,
            lastName,
            preferredEmail,
            schoolEmail,
            phoneNumber,
            password,
            passwordConfirmation,
            error,
        } = this.state;

        var errorMessage = [];
        console.log("General next")
        if (firstName == '' || lastName == '' || preferredEmail == '' || phoneNumber == '' || password == '' || passwordConfirmation == '')
            errorMessage = errorMessage.concat("Some fields were left blank. ")
        if (password != passwordConfirmation)
            errorMessage = errorMessage.concat("Passwords do not match. ")
        if (schoolEmail != '' && !this.validateEmail(preferredEmail))
            errorMessage = errorMessage.concat("Preferred email is not in correct format. ")
        if (schoolEmail != '' && !this.validateEmail(schoolEmail))
            errorMessage = errorMessage.concat("School email is not in correct format. ")
        if (phoneNumber != '' && !this.validatePhoneNumber(phoneNumber))
            errorMessage = errorMessage.concat("Phone number is not in correct format. ")

        console.log(errorMessage)
        this.setState({
            error: errorMessage
        }, () => {
            if (errorMessage.length == 0) this.props.next();
        });
    }

    render() {

        if (this.props.currentStep != 1) {
            return null
        }

        const {
            firstName,
            lastName,
            preferredEmail,
            schoolEmail,
            phoneNumber,
            password,
            passwordConfirmation,
            error
        } = this.state;
        return (
            <div>
                <Form>
                    <div class="forms">
                        <h2>Please create a profile</h2>
                        <hr></hr>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="first_name">
                                <Form.Label><h5>First Name</h5></Form.Label>
                                <Form.Control input
                                    type="name"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={this.onTextboxChangeFirstName}
                                ></Form.Control><br />
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="last_name">
                                <Form.Label><h5>Last Name</h5></Form.Label>
                                <Form.Control input
                                    type="name"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={this.onTextboxChangeLastName}
                                ></Form.Control><br />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="email">
                            <Form.Label><h5> Preferred Email</h5></Form.Label>
                            <Form.Control input
                                type="email"
                                placeholder="Preferred Email"
                                value={preferredEmail}
                                onChange={this.onTextboxChangePreferredEmail}
                            ></Form.Control><br />
                        </Form.Group>

                        <Form.Group controlId="schoolemail">
                            <Form.Label><h5>School Email</h5></Form.Label>
                            <Form.Control input
                                type="email"
                                placeholder="School Email"
                                value={schoolEmail}
                                onChange={this.onTextboxChangeSchoolEmail}
                            ></Form.Control><br />
                        </Form.Group>

                        <Form.Group controlId="phone">
                            <Form.Label><h5>Phone number</h5></Form.Label>
                            <Form.Control input
                                type="tel"
                                placeholder="   -   -    "
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                value={phoneNumber}
                                onChange={this.onTextboxChangePhoneNumber}
                            ></Form.Control><br />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label><h5>Password</h5></Form.Label>
                            <Form.Control input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={this.onTextboxChangePassword}
                            ></Form.Control><br />
                        </Form.Group>

                        <Form.Group controlId="confirm_pass">
                            <Form.Label><h5>Confirm Password</h5></Form.Label>
                            <Form.Control input
                                type="password"
                                placeholder="Confirm Password"
                                value={passwordConfirmation}
                                onChange={this.onTextboxChangeConfirmedPassword}
                            ></Form.Control>
                        </Form.Group>


                        <div class="buttons">
                            <i class="fa fa-arrow-left" aria-hidden="true"></i>
                            <button class="back_btn"> <a href="/Home"> Back </a> </button>
                            <button class="next_btn" onClick={this.nextPage}> Next </button>
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

export default General;
