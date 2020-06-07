import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { addTodo } from '../../store/todos/actions'
import { asyncAddTodo } from '../../store/todos/asyncActions'
import { Button, TextField, Checkbox, FormControlLabel, Paper } from '@material-ui/core';

interface AddTodoState {
  async: boolean,
  text: string
}

class AddTodo extends React.Component<ConnectedProps<typeof connector>, AddTodoState> {
  state = {
    async: false,
    text: ''
  }

  onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (this.state.text !== '') {
      let value: string = this.state.text;
      if (!value.trim()) {
        return;
      }

      //decide to use async or normal action
      if (!this.state.async) {
        this.props.addTodo(this.state.text);
      } else {
        this.props.asyncAddTodo(this.state.text);
      }

      this.setState({
        text: '',
        async: false
      })
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newState = { ...this.state };
    switch (event.target.name) {
      case 'async':
        newState.async = event.target.checked;
        break;
      case 'text':
        newState.text = event.target.value;
        break;
    }

    this.setState(newState);
  }

  public render() {
    return (
      <Paper style={{ padding:10, marginTop:10, marginBottom:10}}>
        <form onSubmit={this.onSubmit}>
          <TextField id="standard-basic" label="Add Todo" name="text" value={this.state.text} onChange={this.handleChange} />
          <FormControlLabel
            control={
              <Checkbox name="async" checked={this.state.async} onChange={this.handleChange} />
            }
            label="Async"
          />
          <Button type="submit" variant="contained" color="primary">Add</Button>
        </form>
      </Paper>
    );
  }
}

const connector = connect(
  null,
  { addTodo, asyncAddTodo }
);

export default connector(AddTodo);