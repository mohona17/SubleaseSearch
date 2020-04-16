import React from 'react';
import { Link } from 'react-router-dom';
import './Forms.css';
import { Button, Form, Col, InputGroup } from 'react-bootstrap';
import ImageUploader from 'react-images-upload';

class Subleaser4 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: '',
            pictures: [],
            pictureNames: [],
        };

        this.onTextboxChangeDescription = this.onTextboxChangeDescription.bind(this);
        this.addPic = this.addPic.bind(this);
    }

    onTextboxChangeDescription(event) {
        this.setState({
            description: event.target.vale,
        });

    }
    addPic(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
            pictureNames: this.state.pictureNames.concat(picture[0].name)
        }, () => {
            if (this.state.pictureNames.length != 0) {
                this.setState({
                    pictureNames: this.state.pictureNames.concat(", ")
                });
            }
        });
    }

    nextPage = () => {
        const {
            description,
        } = this.state;

        var errorMessage = [];

        if (description == '')
            errorMessage = errorMessage.concat("Make sure you write a description");

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
            pictures,
            pictureNames,
        } = this.state;

        var filesUploadedLabel = "You have uploaded: ";
        if (pictures.length == 0) filesUploadedLabel = "You have not uploaded any files";

        return (
            < div >
                <Form>
                    <div class="forms">
                        <h2>Please upload a description and some photos of your sublease.</h2>
                        <hr></hr>
                        {/* <Form.Label><h3>Insert image upload</h3></Form.Label> */}
                        <ImageUploader
                            withIcon={true}
                            buttonText='Choose images of your lease!'
                            onChange={this.addPic}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                        />
                        {filesUploadedLabel}
                        {pictureNames}
                        <br />
                        <Form.Label><h5>Description</h5></Form.Label>
                        <Form.Control input
                            type="textbox"
                            placeholder="Write your description here!"
                            value={description}
                            onChange={this.onTextboxChangeDescription}
                        ></Form.Control>

                        <div class="buttons">
                            <Button variant="outline-info" size="sm" onClick={this.props.back}> Back </Button>
                            <Button variant="outline-info" size="sm" onClick={this.nextPage}> Next </Button>
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
