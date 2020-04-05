import React from 'react';
import { Link } from 'react-router-dom';
import './Forms.css';

class Subleaser1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rent: Number,
            address: '',
            beds: Number,
            bath: Number,
        };

        this.onTextboxChangeRent = this.onTextboxChangeRent.bind(this);
        this.onTextboxChangeAddress = this.onTextboxChangeAddress.bind(this);
        this.onTextboxChangeBeds = this.onTextboxChangeBeds.bind(this);
        this.onTextboxChangeBath = this.onTextboxChangeBath.bind(this);
    }

    onTextboxChangeRent(event) {
        this.setState({
            rent: event.target.value,
        });
    }
    onTextboxChangeAddress(event) {
        this.setState({
            address: event.target.value,
        });
    }
    onTextboxChangeBeds(event) {
        this.setState({
            beds: event.target.value,
        });
    }
    onTextboxChangeBath(event) {
        this.setState({
            bath: event.target.value,
        });
    }
    nextPage = () => {
        const {
            rent, 
            address,
            beds,
            bath
        } = this.state;


        if (this.props.currentStep == 3) {
            // if (firstName == '' || lastName == '' || preferredEmail == '' || phoneNumber == '' || password == '' || passwordConfirmation == '')
            //     alert("Some fields were left blank");
            // else if (password != passwordConfirmation)
            //     alert("Passwords do not match");
            // else if (!this.validate(preferredEmail))
            //     alert("Preferred email is not in correct format");
            // else if (schoolEmail != '' && !this.validate(schoolEmail))
            //     alert("School email is not in correct format");
            // else
            this.props.next();
        }
    }
    render() {
        if (this.props.currentStep != 3) {
            return null
        }

        const {
            rent,
            address,
            beds,
            bath,
        } = this.state;
        return (
            <div>
                <h2>Tell us a little bit more about your sublease</h2>
                <hr></hr>
                <h3>Monthly rent:</h3>
                <input
                    type="number"
                    placeholder="$"
                    value={rent}
                    onChange={this.onTextboxChangeRent}
                ></input><br />
                <h3>Address:</h3>
                <input
                    type="address"
                    placeholder="0"
                    value={address}
                    onChange={this.onTextboxChangeAddress}
                ></input>
                <br />
                <h3>Layout:</h3>
                <input
                    type="number"
                    placeholder="#"
                    min="0"
                    step="1"
                    value={beds}
                    onChange={this.onTextboxChangeBeds}
                ></input>
                <h4>beds</h4>
                <br />
                <input
                    type="number"
                    placeholder="#"
                    min="0"
                    step="1"
                    value={bath}
                    onChange={this.onTextboxChangeBath}
                ></input>
                <h4>baths</h4>
                <br />

                <button onClick={this.props.back}> Back </button>
                <button onClick={this.nextPage()}> Next </button>

            </div>
        )
    };
}

export default Subleaser1;
