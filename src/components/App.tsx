import React from 'react';
import '../css/App.css';
import AddTodo from '../containers/AddTodo';
import { TodoList } from './TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodo></AddTodo>
        <TodoList todos={[
        {text:"one", complete:true, id:"1"},
        {text:"two", complete:false, id:"2"},
        {text:"three", complete:false, id:"3"},
        ]}></TodoList>
      </header>
    </div>
  );
}

export default App;
