import React from 'react';
import '../css/App.css';
import AddTodo from '../containers/AddTodo';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodo></AddTodo>
        <TodoList></TodoList>
      </header>
    </div>
  );
}

export default App;
