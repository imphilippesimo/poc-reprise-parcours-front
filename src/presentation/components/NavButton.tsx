import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Redirect, withRouter } from "react-router-dom";
import { Step } from '../../model/Step';

type Props = {
  destination: any,
  value: String,
  data?: any
  step?: String,
}

class NavButton extends Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {

    const destination = this.props.destination;
    const Button = withRouter(({ history }) => (
      <button
        onClick={(e) => this.handleClick(e, history)}
      >
        {this.props.value}
      </button>
    ));

    return (
      <Button />
    );
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, history: import("history").History<any>): void => {


    if (this.props.data && this.props.step) {
      const dataAsJSON = JSON.stringify(this.props.data);
      const step: Step = new Step(this.props.step, dataAsJSON);
      console.log(step);
      //TODO construct a process object and trigger saving action

    }

    history.push(this.props.destination);
  }



}
export default NavButton;
