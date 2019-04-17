import React, { Component } from 'react';
import NavButton from './NavButton';
import { BrowserRouter as Router, Route, Link, NavLink, Redirect, withRouter } from "react-router-dom";

type Props = {

}

type State = {
    title: string | number | string[] | undefined,
    category: string | number | string[] | undefined,
    purpose: string | number | string[] | undefined,
    details: string | number | string[] | undefined

}

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



                    <NavButton destination="/pricing" value="Suivant" data={this.state} step="description"></NavButton>
                </form>
            </div>

        );
    }
}

export default Description