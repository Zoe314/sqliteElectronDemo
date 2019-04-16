import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'

import Index from './routes/index'
import Friends from './routes/friends';
import Book from './routes/book';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/friends" component={Friends} />
            <Route exact path="/book" component={Book} />
            <Redirect from="*" to="/" />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;