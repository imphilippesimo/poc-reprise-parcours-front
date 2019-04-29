import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NavButton from './NavButton';
import { ProcessState } from '../../redux/state/ProcessState';
import { Process } from '../../model/Process';
import { connect } from 'react-redux';

type Props = {
    title: string,
    category: string,
    purpose: string,
    details: string,
    realPrice: string,
    displayedPrice: string,
    paymentMode: string

}

class Summary extends Component<Props> {

    onSave() {
        alert('Sure ?');
    }

    render() {
        return (
            <Router>
                <form>
                    <h3>Titre:</h3>
                    <h5>{this.props.title}</h5>

                    <h3>Catégorie</h3>
                    <h5>{this.props.category}</h5>

                    <h3>Motivation</h3>
                    <h5>{this.props.purpose}</h5>

                    <h3>Description détaillée</h3>
                    <h5>{this.props.details}</h5>

                    <h3>Prix réel</h3>
                    <h5>{this.props.realPrice}</h5>

                    <h3>Prix affiché</h3>
                    <h5>{this.props.displayedPrice}</h5>

                    <h3>Mode de paiement</h3>
                    <h5>{this.props.paymentMode}</h5>


                    <button color="forward"
                        onClick={this.onSave}
                    >
                        Envoyer
                    </button>
                    <NavButton destination="/pricing" value="Précédent" direction="backward"></NavButton>

                </form>
            </Router>

        );

    };


}

const mapStateToProps = (state: any) => {
    const processState: ProcessState = state.processState;
    const process: Process = processState.process;
    let props: Props = {
        title: '',
        category: '',
        purpose: '',
        details: '',
        realPrice: '',
        displayedPrice: '',
        paymentMode: ''
    }

    if (process.steps) {
        process.steps.map(s => {
            switch (s.stepId) {
                case 'description':
                    props.title = JSON.parse(s.data).title;
                    props.category = JSON.parse(s.data).category;
                    props.purpose = JSON.parse(s.data).purpose;
                    props.details = JSON.parse(s.data).details;
                    break;
                case 'pricing':
                    props.realPrice = JSON.parse(s.data).realPrice;
                    props.displayedPrice = JSON.parse(s.data).displayedPrice;
                    props.paymentMode = JSON.parse(s.data).paymentMode;
                    break;
                default:
                    break;
            }

        });
    }

    return props;
}

export default connect(mapStateToProps)(Summary);