import React from 'react';
import { Link } from 'react-router-dom';
import './Forms.css';
import { Button, Form, Col, InputGroup } from 'react-bootstrap';

class RentalTerm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: Date,
            endDate: Date,
            error: [],
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

    validateDates(start, end) {
        console.log(start)
        console.log(end)
        if (new Date(start) >= new Date(end)) {
            return false;
        }

        var today = new Date();
        var month = (today.getMonth() + 1);
        if (month < 10) month = '0' + month;
        var day = today.getDate();
        if (day < 10) day = '0' + day;

        var date = today.getFullYear() + '-' + month + '-' + day;

        if (new Date(date) > new Date(start)) {
            return false;
        }

        return true;

    }

    nextPage = () => {
        const {
            startDate,
            endDate,
            error
        } = this.state;

        var errorMessage = [];
        //TODO check if end date > start date and if both are after today's date
        var errorMessage = [];
        if (startDate == "yyyy-MM-dd" || endDate == "yyyy-MM-dd")
            errorMessage = errorMessage.concat("Some dates were not filled in");

        else if (!this.validateDates(startDate, endDate))
            errorMessage = errorMessage.concat("Invalid dates");
        console.log(errorMessage)
        this.setState({
            error: errorMessage
        }, () => {
            if (errorMessage.length == 0) this.props.next();
        });
    }

    render() {
        if (this.props.currentStep != 2) {
            return null
        }

        const {
            startDate,
            endDate,
            error,
        } = this.state;
        return (
            <div>
                <Form>
                    <div class="forms">
                        <h2>Choose a Rental Term</h2>
                        <hr></hr>
                        <Form.Control input
                            type="date"
                            placeholder="MM/DD/YYYY"
                            value={startDate}
                            onChange={this.onTextboxChangeStartDate}
                        ></Form.Control>
                        <Form.Label>to</Form.Label>
                        <Form.Control input
                            type="date"
                            placeholder="MM/DD/YYYY"
                            value={endDate}
                            onChange={this.onTextboxChangeEndDate}
                        ></Form.Control><br />

                        <div class="buttons">
                            <button class="back_btn" onClick={this.props.back}> Back </button>
                            <button class="next_btn" onClick={this.nextPage}> Next </button>
                        </div>
                    </div>

                    <div class="error_msg">
                        {error}
                    </div>
                </Form >

            </div >
        )
    };
}

export default RentalTerm;
