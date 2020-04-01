import React from 'react';
import logo from '../../assets/logo.svg';
import './Form.css';
import General from '../../components/Forms/General';
import RentalTerm from '../../components/Forms/RentalTerm';
import Subtenant1 from '../../components/Forms/Subtenant1';
import Subtenant2 from '../../components/Forms/Subtenant2';
import Subtenant3 from '../../components/Forms/Subtenant3';
import Listings from '../Listings/Listings';

class SubtenantForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
        };

        this.updateStep = this.updateStep.bind(this);
    }

    componentDidMount() {
        this.setState({ step: 1 })
    }

    // This method will be sent to the child component
    updateStep() {
        let step = this.state.currentStep;
        this.setState({
            currentStep: step + 1,
        });
    }

    render() {

        return (
            <div>
                <General currentStep={this.state.currentStep} action={this.updateStep}></General>
                <RentalTerm currentStep={this.state.currentStep} action={this.updateStep}></RentalTerm>

                <Subtenant1 currentStep={this.state.currentStep} action={this.updateStep}></Subtenant1>
                <Subtenant2 currentStep={this.state.currentStep} action={this.updateStep}></Subtenant2>
                <Subtenant3 currentStep={this.state.currentStep} action={this.updateStep}></Subtenant3>
                <Listings currentStep={this.state.currentStep}></Listings>
            </div>
        )
    };
}
export default SubtenantForm;

