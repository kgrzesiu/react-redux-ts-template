import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { addTodo } from '../../store/todos/actions'
import { asyncAddTodo } from '../../store/todos/asyncActions'

import '../../css/AddTodo.css'

class AddTodo extends React.Component<ConnectedProps<typeof connector>> {

  inputRef = React.createRef<HTMLInputElement>();
  checkboxRef = React.createRef<HTMLInputElement>();

  onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let input: HTMLInputElement | null = this.inputRef.current;
    let checkbox: HTMLInputElement | null = this.checkboxRef.current;

    if (input && checkbox) {
      let value: string = input.value;
      if (!value.trim()) {
        return;
      }

      //decide to use async or normal action
      if(!checkbox.checked){
        this.props.addTodo(input.value);
      } else {
        this.props.asyncAddTodo(input.value);
      }

      
      input.value = '';
    }
  }

  public render() {
    return (
      <div className="AddTodo">
        <form onSubmit={this.onSubmit}>
          <label>AddTodo</label>
          <input ref={this.inputRef} />
          <label>Async?</label>
          <input ref={this.checkboxRef} type="checkbox" name="isAsync"/>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

const connector = connect(
  null,
  { addTodo, asyncAddTodo }
);

export default connector(AddTodo);