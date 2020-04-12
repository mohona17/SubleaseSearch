import React from 'react';
import logo from '../../assets/logo.svg';
import './Login.css';

class General extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.onTextboxChangeEmail = this.onTextboxChangeEmail.bind(this);
        this.onTextboxChangePassword = this.onTextboxChangePassword.bind(this);
    }

    onTextboxChangeEmail(event) {
        this.setState({
            email: event.target.value,
        });

    }
    onTextboxChangePassword(event) {
        this.setState({
            password: event.target.value,
        });
    }


    render() {
        const {
            email,
            password,
        } = this.state;
        return (
            <div>
                <h2>Login</h2>
                <hr></hr>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={this.onTextboxChangeEmail}
                ></input><br />
                <h4>Password</h4>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={this.onTextboxChangePassword}
                ></input><br />

                <button> <a href="/Listings"> Login (now goes to /Listings) </a> </button>

            </div>
        )
    };
}

export default General;