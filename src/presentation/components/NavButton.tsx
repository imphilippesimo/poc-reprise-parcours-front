import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Save } from '../../application/Save';
import { Utils } from '../../application/Utils';
import { Process } from '../../model/Process';
import { ProcessState } from '../../redux/state/ProcessState';
type History = import("history").History<any>;


type Props = {
  destination: any,
  value: string,
  direction: string,
  data?: any,
  stepId?: string,
  save?: Function,
  process?: Process
}



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


  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, history: History): void => {

    if (this.props.data && this.props.stepId && this.props.save && this.props.process)

      Utils.saveData(this.props.data, this.props.stepId, this.props.save, this.props.process);

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

const mapStateToProps = (state: any) => {
  const processState: ProcessState = state.processState;
  //console.log(processState);
  return {
    process: processState.process
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavButton);
