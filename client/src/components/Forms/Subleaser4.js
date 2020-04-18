import React from 'react';
import { Link } from 'react-router-dom';
import './Forms.css';
import { Button, Form, Col, InputGroup } from 'react-bootstrap';

class Subleaser4 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: '',
        };

        this.onTextboxChangeDescription = this.onTextboxChangeDescription.bind(this);
    }

    onTextboxChangeDescription(event) {
        this.setState({
            description: event.target.vale,
        });

    }

    nextPage = (e) => {
        e.preventDefault();
        const {
            description,
        } = this.state;

        var errorMessage = [];

        if (description == '')
            errorMessage = errorMessage.concat("*Make sure you write a description");

        console.log(errorMessage)
        this.setState({
            error: errorMessage
        }, () => {
            if (errorMessage.length == 0) this.props.next();
        });
    }

    render() {
        if (this.props.currentStep != 6) {
            return null
        }

        const {
            description,
            error,
        } = this.state;

<<<<<<< Updated upstream
=======
        var filesUploadedLabel = "You have uploaded: ";
        if (pictures.length == 0) filesUploadedLabel = "*You have not uploaded any files";

>>>>>>> Stashed changes
        return (
            < div >
                <Form>
                    <div class="forms">
                        <h2>Please upload a description and some photos of your sublease.</h2>
                        <hr></hr>
                        <Form.Label><h3>Insert image upload</h3></Form.Label>
                        <br />
                        <Form.Label><h5>Description</h5></Form.Label>
                        <Form.Control input
                            type="textbox"
                            placeholder="Write your description here!"
                            value={description}
                            onChange={this.onTextboxChangeDescription}
                        ></Form.Control>

                        <div class="buttons">
                            <button class="back_btn" onClick={this.props.back}> Back </button>
                            <button class="back_btn" onClick={this.nextPage}> Next </button>
                        </div>

                        <div class="error_msg">
                            {error}
                        </div>
                    </div>
                </Form>
            </div >
        )
    };
}

export default Subleaser4;
