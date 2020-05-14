import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

import './css/App.css';

import AddTodo from './containers/todos/AddTodo';
import TodoList from './containers/todos/TodoList';
import Footer from './containers/footer/Footer';
import Stats from './containers/stats/Stats';
import TodoDetails from './containers/todos/TodoDetails';

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
            <Route path="/" exact render={() => <h4>Home page of todos</h4>} />
            <Switch>
              <Route exact path="/todos">
                <AddTodo></AddTodo>
                <TodoList></TodoList>
                <Footer></Footer>
              </Route>
              <Route path="/stats" exact component={Stats} />
              <Route path="/:todoId" exact component={TodoDetails} />
            </Switch>

          </header>
        </div>
      </BrowserRouter>)
  }
}

export default App;
