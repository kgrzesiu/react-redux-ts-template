import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/todos">Todos</Link></li>
                <li><Link to="/stats">Stats</Link></li>
              </ul>
            </nav>
            <Route path="/" exact render={()=> <h4>Home page of todos</h4>}/>

            <Route path="/todos" component={AddTodo}/>
            <Route path="/todos" component={TodoList}/>
            <Route path="/todos" component={Footer}/>

            <Route path="/stats" exact component={Stats}/>
            
          </header>
        </div>
      </BrowserRouter>)
  }
}

export default App;
