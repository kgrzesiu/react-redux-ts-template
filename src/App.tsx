import React from 'react';
import './App.css';
import AddTodo from './containers/AddTodo';
import Todo from './containers/Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodo></AddTodo>
        <ul>
          <Todo completed={false} text="Greg"></Todo>
          <Todo completed={true} text="Greg Done"></Todo>
        </ul>
      </header>
    </div>
  );
}

export default App;
