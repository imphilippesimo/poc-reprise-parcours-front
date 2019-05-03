import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Pricing from './presentation/components/Pricing';
import Description from './presentation/components/Description';
import Summary from './presentation/components/Summary';
import { connect } from 'react-redux';
import { Load } from './application/Load';
import { ProcessState } from './redux/state/ProcessState';

class Props {
  rebind?: Function = () => { };
  isFetching?: Boolean = true;
}

class App extends Component<Props> {

  componentDidMount() {
    //launch the request to load the saved process state in the store    
    if (this.props.rebind)
      this.props.rebind();
  }

  render() {
    //console.log(this.props);
    if (!this.props.isFetching) {

      return (
        <div>
          <Switch>
            <Route exact path="/" component={Description} />
            <Route path="/description" component={Description} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/summary" component={Summary} />

          </Switch>

        </div>
      );
    } else {
      return (
        <p>
          Chargement ...
        </p>
      );
    }
  }
}

const mapDispatchToProps = (dispatch: any) => {
  const url: URL = new URL(window.location.href);
  //const processInstanceId:string = url.searchParams.get("instance_id");
  return {
    rebind: () => {
      dispatch(Load.instance().load(dispatch, url.searchParams.get("instance_id")));
    },
    //Feel free to add other actions, they will be bound to this component props
  }

}

const mapStateToProps = (state: any) => {
  const processState: ProcessState = state.processState;
  //console.log(processState);
  return {
    isFetching: processState.isFetching,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
