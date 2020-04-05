import React from 'react';
import { Link } from 'react-router-dom';
import './Forms.css';

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

    nextPage = () => {
        const {
            description,
        } = this.state;


        if (this.props.currentStep == 6) {
            this.props.next();
        }
    }

    render() {
        if (this.props.currentStep != 6) {
            return null
        }

        const {
            description,
        } = this.state;

        return (
            < div >
                <h2>Please upload a description and some photos of your sublease.</h2>
                <hr></hr>
                <h1>Insert image upload</h1>
                <h4>Description</h4>
                <input
                    type="textbox"
                    value={description}
                    onChange={this.onTextboxChangeDescription}
                ></input>
                <button onClick={this.props.back}> Back </button>
                <button onClick={this.nextPage()}> Next </button>

            </div >
        )
    };
}

export default Subleaser4;
