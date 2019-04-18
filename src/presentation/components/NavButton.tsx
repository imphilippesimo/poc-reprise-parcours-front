import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Redirect, withRouter } from "react-router-dom";
import { Step } from '../../model/Step';
import { Process } from '../../model/Process';
import { Save } from '../../application/Save';
import { connect } from 'react-redux';


type Props = {
  destination: any,
  value: string,
  data?: any
  step?: string
  save?: Function
}

const PROCESS_ID = "SELLING";
const PROCESS_INSTANCE_ID = "SELLING_INSTANCE_1";

class NavButton extends Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {

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


    if (this.props.data && this.props.step && this.props.save) {
      const dataAsJSON = JSON.stringify(this.props.data);
      const step: Step = new Step(this.props.step, dataAsJSON);
      const process: Process = new Process(PROCESS_ID, PROCESS_INSTANCE_ID, [step]);
      this.props.save(process);

    }

    history.push(this.props.destination);
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    save: (process: Process) => {
      dispatch(Save.instance().save(dispatch, process));
    }
    //Feel free to add other actions, they will be bound to this component props
  }

}


export default connect(null, mapDispatchToProps)(NavButton);
