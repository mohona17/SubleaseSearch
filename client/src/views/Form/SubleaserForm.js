import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './Form.css';
import General from '../../components/Forms/General';
import RentalTerm from '../../components/Forms/RentalTerm';
import Subleaser1 from '../../components/Forms/Subleaser1';
import Subleaser2 from '../../components/Forms/Subleaser2';
import Subleaser3 from '../../components/Forms/Subleaser3';
import Subleaser4 from '../../components/Forms/Subleaser4';
import Subleaser5 from '../../components/Forms/Subleaser5';
import MyListings from '../Listings/MyListings';

class SubleaserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            error: "None",
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
        console.log(this.state.currentStep)
        return (
            <div>
                <General currentStep={this.state.currentStep} next={this.nextStep} back={this.backStep} ></General>
                <RentalTerm currentStep={this.state.currentStep} next={this.nextStep} back={this.backStep} ></RentalTerm>
                <Subleaser1 currentStep={this.state.currentStep} next={this.nextStep} back={this.backStep} ></Subleaser1>
                <Subleaser2 currentStep={this.state.currentStep} next={this.nextStep} back={this.backStep} ></Subleaser2>
                <Subleaser3 currentStep={this.state.currentStep} next={this.nextStep} back={this.backStep} ></Subleaser3>
                <Subleaser4 currentStep={this.state.currentStep} next={this.nextStep} back={this.backStep} ></Subleaser4>
                <Subleaser5 currentStep={this.state.currentStep} next={this.nextStep} back={this.backStep} ></Subleaser5>
            </div>
        )
    };
}
export default SubleaserForm;

