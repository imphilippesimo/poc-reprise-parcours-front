import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Save } from '../../application/Save';
import { Utils } from '../../application/Utils';
import { Process } from '../../model/Process';
import NavButton from './NavButton';

type State = {
    title: string,
    category: string,
    purpose: string,
    details: string,
    instanceId?: string

}

type Props = State;
const stepId: string = "description";
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

    nextLocation = this.props.instanceId ? `/pricing?instance_id=${this.props.instanceId}` : '/pricing';
    saveLocation = this.props.instanceId ? `/description?instance_id=${this.props.instanceId}` : '/description';

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
        this.setState(shrink(this.props));
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



                    <NavButton destination={this.nextLocation} value="Suivant" data={shrink(this.state)} stepId={stepId} direction="forward" />
                    <NavButton destination={this.saveLocation} value="Sauvegarder" data={shrink(this.state)} stepId={stepId} direction="forward" />
                </form>
            </div>

        );
    }
}

const shrink = ({ title, category, purpose, details }: { title: any, category: any, purpose: any, details: any }) => {
    return ({ title, category, purpose, details });
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        save: (process: Process) => {
            dispatch(Save.instance().save(dispatch, process));
        }
        //Feel free to add other actions, they will be bound to this component props
    }

}

const mapStateToProps = (state: any) => {
    return Utils.mapStateToStepProps(state, stepId);
}

export default connect(mapStateToProps, mapDispatchToProps)(Description);