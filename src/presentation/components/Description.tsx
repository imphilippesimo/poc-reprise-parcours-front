import React, { Component } from 'react';
import NavButton from './NavButton';
import { BrowserRouter as Router, Route, Link, NavLink, Redirect, withRouter } from "react-router-dom";
import { ProcessState } from '../../redux/state/ProcessState';
import { Process } from '../../model/Process';
import { Step } from '../../model/Step';
import { connect } from 'react-redux';



type State = {
    title: string | number | string[] | undefined,
    category: string | number | string[] | undefined,
    purpose: string | number | string[] | undefined,
    details: string | number | string[] | undefined

}

type Props = State;

class Description extends Component<Props, State> {


    constructor(props: Props) {
        super(props);
        this.state = {
            title: '',
            category: '',
            purpose: '',
            details: ''
        }
    }

    handleChange = (e: any, key: string) => {
        switch (key) {
            case 'title':

                this.setState({
                    title: e.target.value
                })


                break;
            case 'category':

                this.setState({
                    category: e.target.value
                })


                break;
            case 'purpose':

                this.setState({
                    purpose: e.target.value
                })


                break;
            case 'details':

                this.setState({
                    details: e.target.value
                })

                break;

            default:
                break;
        }

    }

    componentDidMount() {
        this.setState(this.props);
    }


    render() {
        return (
            <div>
                <form>
                    <label>Titre</label>
                    <input type="text" id="title" value={this.state.title} onChange={(e) => this.handleChange(e, "title")} placeholder="Titre de l'annonce..." />

                    <label>Catégorie</label>
                    <input type="text" id="category" value={this.state.category} onChange={(e) => this.handleChange(e, "category")} placeholder="Categorie du produit..." />

                    <label>Motivation</label><br />
                    <input type="text" value={this.state.purpose} onChange={(e) => this.handleChange(e, "purpose")} placeholder="Pourquoi vendre ?" />

                    <label>Description détaillée</label><br />
                    <textarea id="details" value={this.state.details} onChange={(e) => this.handleChange(e, "details")} placeholder="Description détaillée..." />



                    <NavButton destination="/pricing" value="Suivant" data={shrink(this.state)} step="description"></NavButton>
                </form>
            </div>

        );
    }
}

let shrink = ({ title, category, purpose, details }: { title: any, category: any, purpose: any, details: any }) => {
    return ({ title, category, purpose, details });
}

const mapStateToProps = (state: any) => {

    const processState: ProcessState = state.processState;
    const process: Process = processState.process;
    const currentStep = process.steps.filter((step: Step) => {
        if (step.stepId === "description")
            return step;
    })[0];
    if (currentStep) {
        return extractData(currentStep.data);
    }

    else
        return {};

}

const extractData = (data: string) => {

    return JSON.parse(data);

}

export default connect(mapStateToProps)(Description);