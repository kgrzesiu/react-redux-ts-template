import * as React from 'react';
// import { connect } from 'react-redux'

export interface IAddTodoProps {
}

class AddTodo extends React.Component<IAddTodoProps> {
  public render() {
    return (
      <div>
        AddTodo:
        <input />
        <button>Add</button>
      </div>
    );
  }
}
/* 
const mapState2Props = (state:any) => {
  return {
  };
}

export default connect(mapState2Props)(AddTodo); */
export default AddTodo;