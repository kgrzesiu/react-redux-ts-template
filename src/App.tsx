import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

import AddTodo from './containers/todos/AddTodo';
import TodoList from './containers/todos/TodoList';
import Footer from './containers/footer/Footer';
import Stats from './containers/stats/Stats';
import TodoDetails from './containers/todos/TodoDetails';
import { CssBaseline, Container, Link, createStyles, Theme, withStyles, WithStyles } from '@material-ui/core';
import { Grid, Paper } from '@material-ui/core';

const useStyles = ({ spacing }: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 50,
    width: 100,
    textAlign: "center",
    padding: 15
  },
  control: {
    padding: spacing(2),
  },
});

interface Props extends WithStyles<typeof useStyles> { }

class App extends React.Component<Props> {
  render() {
    const { classes } = this.props;

    return (
      <BrowserRouter>
        <CssBaseline />

        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            <Grid key={1} item>
              <Paper className={classes.paper}><Link component={NavLink} to="/" exact activeClassName="customActive">Home</Link></Paper>
            </Grid>
            <Grid key={2} item>
              <Paper className={classes.paper}><Link component={NavLink} to="/todos">Todos</Link></Paper>
            </Grid>
            <Grid key={3} item>
              <Paper className={classes.paper}><Link component={NavLink} to={{
                pathname: '/stats',
                hash: '#submit',
                search: '?quick-submit=true'
              }}>Stats</Link></Paper>
            </Grid>
          </Grid>
        </Grid>

        <Container maxWidth="md">
          <Switch>
            <Route exact path="/todos/">
              <AddTodo></AddTodo>
              <TodoList></TodoList>
              <Footer></Footer>
            </Route>
            <Route path="/todos/:todoId" component={TodoDetails} />
            <Route path="/stats" component={Stats} />
            <Route path="/" exact render={() => <h4>Home page of todos</h4>} />
            <Route render={() => <h4>Error 404</h4>} />
          </Switch>
        </Container>
      </BrowserRouter>)
  }
}

export default withStyles(useStyles, { withTheme: true })(App);
