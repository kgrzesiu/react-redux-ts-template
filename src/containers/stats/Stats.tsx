import React, { MouseEvent } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../../store';

import '../../css/Stats.css'

enum WORK_LOAD {
  doable = "doable",
  hard = "hard",
  insance = "insane"    
}

interface IState {
  workload: WORK_LOAD;
}

class Stats extends React.Component<ConnectedProps<typeof reduxConnector>, IState> {
  //state here is not used but showed for demo purposes
  readonly state = { workload: WORK_LOAD.doable}

  getWorkLoad(count:number):WORK_LOAD {
      if (count < 3){
          return WORK_LOAD.doable
      } else if (count < 5){
          return WORK_LOAD.hard
      } else {
          return WORK_LOAD.insance
      }
  }

  getWorkLoadState = (event:MouseEvent) => {
    this.setState({ workload:this.getWorkLoad(this.props.todos.length) })
}

  public render() {
    return (
      <div className="Stats">
        <div>To complete: {this.props.todos.length}</div>
        <button onClick={this.getWorkLoadState}>Get Workload state</button>
        <div>Workload: {this.state.workload}</div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  todos: state.todos.todos.filter(todo => !todo.completed)
});

const reduxConnector = connect(mapStateToProps)

export default reduxConnector(Stats)