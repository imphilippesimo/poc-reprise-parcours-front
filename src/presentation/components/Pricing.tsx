import React, { Component } from 'react';
import NavButton from './NavButton';



class Pricing extends Component {
    render() {
        return (
            <div>

                <form>
                    <label>Prix Réel</label>
                    <input type="text" id="realPrice" name="realPrice" placeholder="Ex: 19.95" />

                    <label>Prix affiché</label>
                    <input type="text" id="displayedPrice" name="displayedPrice" placeholder="Ex: 9.95" />

                    <label>Mode de paiement</label><br/>
                    <select>
                        <option value="cb">Carte bancaire</option>
                        <option value="cash">Espèces</option>
                    </select>

                    <NavButton destination="/description" value="Précédent"></NavButton>
                    <NavButton destination="/summary" value="Suivant"></NavButton>
                </form>
            </div>


        );

    };


}

export default Pricing