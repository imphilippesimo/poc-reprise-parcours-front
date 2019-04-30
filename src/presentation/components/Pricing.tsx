import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Utils } from '../../application/Utils';
import NavButton from './NavButton';


type State = {
    realPrice: string,
    displayedPrice: string,
    paymentMode: string
}

type Props = State;


const stepId: string = "pricing";

class Pricing extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            realPrice: '',
            displayedPrice: '',
            paymentMode: ''
        }
    }

    handleChange = (e: any, key: string) => {
        switch (key) {
            case 'realPrice':

                this.setState({
                    realPrice: e.target.value
                })


                break;
            case 'displayedPrice':

                this.setState({
                    displayedPrice: e.target.value
                })


                break;
            case 'paymentMode':

                this.setState({
                    paymentMode: e.target.value
                })


                break;
            default:
                break;
        }

        //console.log(this.state);

    }

    componentDidMount() {
        this.setState(shrink(this.props));
    }

    render() {
        return (
            <div>

                <form>
                    <label>Prix Réel</label>
                    <input type="text" id="realPrice" value={this.state.realPrice} onChange={(e) => this.handleChange(e, "realPrice")} placeholder="Ex: 19.95" />

                    <label>Prix affiché</label>
                    <input type="text" id="displayedPrice" value={this.state.displayedPrice} onChange={(e) => this.handleChange(e, "displayedPrice")} placeholder="Ex: 9.95" />

                    <label>Mode de paiement</label><br />
                    <select value={this.state.paymentMode} onChange={(e) => this.handleChange(e, "paymentMode")}>
                        <option>Choisir</option>
                        <option value="cb">Carte bancaire</option>
                        <option value="cash">Espèces</option>
                    </select>


                    <NavButton destination="/summary" value="Suivant" data={shrink(this.state)} stepId={stepId} direction="forward"></NavButton>
                    <NavButton destination="/description" value="Précédent" direction="backward"></NavButton>
                    <NavButton destination="/pricing" value="Sauvegarder" data={shrink(this.state)} stepId={stepId} direction="forward"></NavButton>
                </form>
            </div>


        );

    };


}

const shrink = ({ realPrice, displayedPrice, paymentMode }: { realPrice: any, displayedPrice: any, paymentMode: any }) => {
    return ({ realPrice, displayedPrice, paymentMode });
}

const mapStateToProps = (state: any) => {
    return Utils.mapStateToStepProps(state, stepId);
}

export default connect(mapStateToProps)(Pricing);