import React from 'react';
import './css/App.css';
import AddTodo from './containers/todos/AddTodo';
import TodoList from './containers/todos/TodoList';
import Footer from './containers/footer/Footer';

class App extends React.Component {
  render() {
    return (<div className="App">
      <header className="App-header">
        <AddTodo></AddTodo>
        <TodoList></TodoList>
        <Footer></Footer>
      </header>
    </div>)
  }
}

export default App;
