import React from 'react';
import logo from '../../assets/logo.svg';
import { Route, Switch, Redirect  } from 'react-router-dom';
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

        this.nextStep = this.nextStep.bind(this);
        this.backStep = this.backStep.bind(this);
    }

    componentDidMount() {
        this.setState({ currentStep: 1 })
    }

    // This method will be sent to the child component
    nextStep() {
        let step = this.state.currentStep;
        this.setState({
            currentStep: step + 1,
        });
    }
    // This method will be sent to the child component
    backStep() {
        let step = this.state.currentStep;
        this.setState({
            currentStep: step - 1,
        });
    }

    render() {
        
        return (
            <div>
                <General currentStep={this.state.currentStep} next={this.nextStep}></General>
                <RentalTerm currentStep={this.state.currentStep} next={this.nextStep} back={this.backStep}></RentalTerm>
                <Subtenant1 currentStep={this.state.currentStep} next={this.nextStep} back={this.backStep}></Subtenant1>
                <Subtenant2 currentStep={this.state.currentStep} next={this.nextStep} back={this.backStep}></Subtenant2>
                <Subtenant3 currentStep={this.state.currentStep} next={this.nextStep} back={this.backStep}></Subtenant3>
                <Listings currentStep={this.state.currentStep}></Listings>
            </div>
        )
    };
}
export default SubtenantForm;

