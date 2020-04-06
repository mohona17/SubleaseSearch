import React from 'react';
import { Link } from 'react-router-dom';
import './Forms.css';

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
            this.setState({
                preferences: false,
            });
        }
        else {
            this.setState({
                preferences: true,
            });
        }
    }
    onTextboxChangeGenderMale(event) {
        if (this.state.genderMale == true) {
            this.setState({
                genderMale: false,
            });
        }
        else {
            this.setState({
                genderMale: true,
            });
        }
    }
    onTextboxChangeGenderFemale(event) {
        if (this.state.genderFemale == true) {
            this.setState({
                genderFemale: false,
            });
        }
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
            preferences,
            genderFemale,
            genderMale,
            edu,
        } = this.state;


            this.props.next();
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
        } = this.state;

        var preferenceForm = <div></div>;
        if (preferences == true) {
            preferenceForm = (
                <div>
                    <h3>Gender restriction</h3>
                    <br />

                    {/* TODO: Need to restrict to 1 */}
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
                <h2>Do you have preferences for a subtenant?</h2>
                <input
                    type="checkbox"
                    value={preferences}
                    onChange={this.onTextboxChangePreferences}
                ></input>
                {preferenceForm}
                <button onClick={this.props.back}> Back </button>
                <button onClick={this.nextPage()}> Next </button>

            </div >
        )
    };
}

export default Subleaser3;
