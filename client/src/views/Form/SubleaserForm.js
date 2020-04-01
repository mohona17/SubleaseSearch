import React from 'react';
import logo from '../../assets/logo.svg';
import './Form.css';
import General from '../../components/Forms/General';
import RentalTerm from '../../components/Forms/RentalTerm';
import Subleaser1 from '../../components/Forms/Subleaser1';
import Subleaser2 from '../../components/Forms/Subleaser2';
import Subleaser3 from '../../components/Forms/Subleaser3';
import Subleaser4 from '../../components/Forms/Subleaser4';
import Subleaser5 from '../../components/Forms/Subleaser5';


class SubleaserForm extends React.Component {
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

                <Subleaser1 currentStep={this.state.currentStep} action={this.updateStep}></Subleaser1>
                <Subleaser2 currentStep={this.state.currentStep} action={this.updateStep}></Subleaser2>
                <Subleaser3 currentStep={this.state.currentStep} action={this.updateStep}></Subleaser3>
                <Subleaser4 currentStep={this.state.currentStep} action={this.updateStep}></Subleaser4>
                <Subleaser5 currentStep={this.state.currentStep} action={this.updateStep}></Subleaser5>

            </div>
        )
    };
}
export default SubleaserForm;

