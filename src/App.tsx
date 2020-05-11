import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

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
                <li><NavLink to="/" exact activeClassName="customActive">Home</NavLink></li>
                <li><NavLink to="/todos">Todos</NavLink></li>
                <li><NavLink to={{
                                pathname: '/stats',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>Stats</NavLink></li>
              </ul>
            </nav>
            <Route path="/" exact render={()=> <h4>Home page of todos</h4>}/>

            <Route path="/(todos|todos/:id)" component={AddTodo}/>
            <Route path="/(todos|todos/:id)" component={TodoList}/>
            <Route path="/todos" component={Footer}/>

            <Route path="/stats" exact component={Stats}/>
            
          </header>
        </div>
      </BrowserRouter>)
  }
}

export default App;
