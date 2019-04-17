import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Pricing from './presentation/components/Pricing';
import Description from './presentation/components/Description';
import Summary from './presentation/components/Summary';


class App extends Component {
  render() {
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
  }
}


export default App;
