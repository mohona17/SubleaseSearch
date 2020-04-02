import React from 'react';
import { Link } from 'react-router-dom';
import './Forms.css';

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
        };

        this.onTextboxChangeFirstName = this.onTextboxChangeFirstName.bind(this);
        this.onTextboxChangeLastName = this.onTextboxChangeLastName.bind(this);
        this.onTextboxChangePreferredEmail = this.onTextboxChangePreferredEmail.bind(this);
        this.onTextboxChangeSchoolEmail = this.onTextboxChangeSchoolEmail.bind(this);
        this.onTextboxChangePhoneNumber = this.onTextboxChangePhoneNumber.bind(this);
        this.onTextboxChangepassword = this.onTextboxChangePassword.bind(this);
        this.onTextboxChangeConfirmedpassword = this.onTextboxChangeConfirmedPassword.bind(this);
    }

    onTextboxChangeFirstName(event) {
        this.setState({
            firstName: event.target.value,
        });
    }
    onTextboxChangeLastName(event) {
        this.setState({
            lastName: event.target.value,
        });
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

    render() {
        if (this.props.currentStep !== 1) {
            return null
        }

        const {
            firstName,
            lastName,
            preferredEmail,
            schoolEmail,
            phoneNumber,
            password,
            passwordConfirmation
        } = this.state;
        return (
            <div>
                <h2>Please create a profile</h2>
                <hr></hr>
                <input
                    type="name"
                    placeholder="First Name"
                    value={firstName}
                    onChange={this.onTextboxChangeFirstName}
                ></input><br />
                <input
                    type="name"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={this.onTextboxChangeLastName}
                ></input><br />
                <input
                    type="email"
                    placeholder="Preferred Email"
                    value={preferredEmail}
                    onChange={this.onTextboxChangePreferredEmail}
                ></input><br />
                <input
                    type="email"
                    placeholder="School Email"
                    value={schoolEmail}
                    onChange={this.onTextboxChangeSchoolEmail}
                ></input><br />
                <input
                    type="tel"
                    placeholder="   -   -    "
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    value={phoneNumber}
                    onChange={this.onTextboxChangePhoneNumber}
                ></input><br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={this.onTextboxChangePassword}
                ></input><br />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={passwordConfirmation}
                    onChange={this.onTextboxChangeConfirmedPassword}
                ></input><br />

                <button> <a href="/Home"> Back </a> </button>
                <button onClick={this.props.next}> Next </button>

            </div>
        )
    };
}

export default General;
