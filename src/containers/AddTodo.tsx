import * as React from 'react';
import { connect } from 'react-redux';
import { ADD_TODO } from '../reducers/todosReducer';

export interface IAddTodoProps {
}

class AddTodo extends React.Component<any> {

  inputRef = React.createRef<HTMLInputElement>();

  onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let input:HTMLInputElement | null= this.inputRef.current;
    
    if (input){
      let value:String = input.value;
      if (!value.trim()){
        return;
      }
      this.props.addTodo(input.value);
      input.value = '';
    }
  }

  public render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>AddTodo</label>
          <input ref={this.inputRef} />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch: any) => ({
  addTodo: (text:String) => dispatch({ type: ADD_TODO, text: text})
})

export default connect(null,mapDispatchToProps)(AddTodo);