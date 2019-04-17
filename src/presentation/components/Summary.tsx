import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NavButton from './NavButton';

class Summary extends Component {

    onSave() {
        alert('Sure ?');        
    }

    render() {
        return (
            <Router>
                <form>
                    <label>Titre:</label>
                    <h3>Titre de l'annonce</h3>

                    <label>Catégorie</label>
                    <h3>Catégorie du produit</h3>

                    <label>Motivation</label>
                    <h3>Raison de la mise en vente</h3>

                    <label>Description détaillée</label>
                    <h3>Description détaillée</h3>

                    <label>Prix réel</label>
                    <h3>19.95</h3>

                    <label>Prix affiché</label>
                    <h3>9.95</h3>

                    <label>Mode de paiement</label>
                    <h3>Espèces</h3>

                    <NavButton destination="/pricing" value="Précédent"></NavButton>
                    <button
                        onClick={this.onSave}
                    >
                        Envoyer
                    </button>

                </form>
            </Router>

        );

    };


}

export default Summary