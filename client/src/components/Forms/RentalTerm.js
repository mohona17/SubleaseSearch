import React from 'react';
import { Link } from 'react-router-dom';
import './Forms.css';

class RentalTerm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: Date("2000-01-01"),
            endDate: Date("2000-01-01"),
        }

        this.onTextboxChangeStartDate = this.onTextboxChangeStartDate.bind(this);
        this.onTextboxChangeEndDate = this.onTextboxChangeEndDate.bind(this);
    }

    onTextboxChangeStartDate(event) {
        this.setState({
            startDate: event.target.value,
        });
    }
    onTextboxChangeEndDate(event) {
        this.setState({
            endDate: event.target.value,
        });
    }
    nextPage = () => {
        const {
            startDate,
            endDate
        } = this.state;

        console.log(this.state.edited)
        if (startDate == Date("2000-01-01") || endDate == Date("2000-01-01"))
            this.props.handleError("Some dates were not filled in");

        else if (startDate != Date("2000-01-01") && endDate != Date("2000-01-01"))
            this.props.next();
    }

    render() {
        if (this.props.currentStep != 2) {
            return null
        }

        const {
            startDate,
            endDate,
        } = this.state;
        return (
            <div>
                <h2>Choose a Rental Term</h2>
                <hr></hr>
                <input
                    type="date"
                    placeholder="MM/DD/YYYY"
                    value={startDate}
                    onChange={this.onTextboxChangeStartDate}
                ></input><br />
                <input
                    type="date"
                    placeholder="MM/DD/YYYY"
                    value={endDate}
                    onChange={this.onTextboxChangeEndDate}
                ></input><br />

                <button onClick={this.props.back}> Back </button>
                <button onClick={this.nextPage()}> Next </button>

            </div>
        )
    };
}

export default RentalTerm;
