import React from 'react';
import logo from '../../assets/logo.svg';
import './Form.css';
import General from '../../components/Forms/General';
import RentalTerm from '../../components/Forms/RentalTerm';


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
            </div>
        )
    };
}
export default SubtenantForm;

