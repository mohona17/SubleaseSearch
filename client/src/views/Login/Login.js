import React from 'react';
import './Login.css';
import { Button, Form, Col, InputGroup } from 'react-bootstrap';
import logo from './logo.png'


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
                <Form>
                    <div class="forms">
                        <div class="wrapper">
                            <img class="logo" src={logo} alt={"logo"}></img>
                        </div>
                        <h2>Login</h2>
                        <hr></hr>

                        <Form.Label><h5>Email</h5></Form.Label>
                        <Form.Control input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={this.onTextboxChangeEmail}
                        ></Form.Control><br />

                        <Form.Label><h5>Password</h5></Form.Label>
                        <Form.Control input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={this.onTextboxChangePassword}
                        ></Form.Control><br />

                        <button class="login"> <a href="/Profile"> Login </a> </button>
                    </div>
                </Form>

            </div>
        )
    };
}

export default General;