import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Redirect, withRouter } from "react-router-dom";
import { Step } from '../../model/Step';
import { Process } from '../../model/Process';
import { Save } from '../../application/Save';
import { connect } from 'react-redux';
import { ProcessState } from '../../redux/state/ProcessState';
import { HookURL } from '../../model/HookURL';


type Props = {
  destination: any,
  value: string,
  direction: string,
  data?: any,
  stepId?: string,
  save?: Function,
  process?: Process
}

const PROCESS_ID = "SELLING";

class NavButton extends Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    //console.log(this.props);
    const Button = withRouter(({ history }) => (
      <button
        color={this.props.direction}
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


    if (this.props.data && this.props.stepId && this.props.save && this.props.process) {
      const dataAsJSON = JSON.stringify(this.props.data);
      const step: Step = new Step(this.props.stepId, dataAsJSON);
      //console.log(this.props.process);
      let process: Process = this.props.process;
      process = this.updateProcessWithStep(step, process);
      //console.log(process);
      this.props.save(process);

    }

    history.push(this.props.destination);
  }

  updateProcessWithStep = (step: Step, process: Process): Process => {

    let updating: boolean = false;

    //in case of empty process, initialize a new one and return
    if (!process.processId) {
      const process_instance_id = PROCESS_ID + Math.floor(Math.random() * 200000).toString();
      let hookURL: HookURL = new HookURL("http://localhost", "3000", step.stepId, process_instance_id);
      return new Process(PROCESS_ID, process_instance_id, [step], hookURL);
    }

    //if this step already exist in the process, its just a step update
    process.steps = process.steps.map(s => {

      if (s.stepId === step.stepId) {
        updating = true;
        s = step;
      }
      return s;
    })

    console.log(process);
    console.log(updating);

    //not a step update, add it to the process
    if (!updating) {
      process.steps.push(step);
    }

    //update the hookUrl
    if (process.url)
      process.url.stepId = step.stepId;
    return process;
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

const mapStateToProps = (state: any) => {
  const processState: ProcessState = state.processState;
  //console.log(processState);
  return {
    process: processState.process
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavButton);
