import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './css/App.css';

import AddTodo from './containers/todos/AddTodo';
import TodoList from './containers/todos/TodoList';
import Footer from './containers/footer/Footer';
import Stats from './containers/stats/Stats';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <nav className="Navigation">
              <ul>
                <li><a href="/todos">Todos</a></li>
                <li><a href="/stats">Stats</a></li>
              </ul>
            </nav>
            <Stats></Stats>
            <AddTodo></AddTodo>
            <TodoList></TodoList>
            <Footer></Footer>
          </header>
        </div>
      </BrowserRouter>)
  }
}

export default App;
