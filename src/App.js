import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 import { UserIsNotAuthenticated, UserIsAuthenticated } from './helpers/auth'

import AppNavBar from './COMPONENTS/layout/AppNavBar';
import Dashboard from './COMPONENTS/layout/Dashboard';
import AddClient from './COMPONENTS/clients/AddClient';
import ClientDetails from './COMPONENTS/clients/ClientDetails';
import EditClient from './COMPONENTS/clients/EditClient';
import Login from './COMPONENTS/auth/Login';

import './App.css';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
              <div className="App">
                  <AppNavBar/>
                  <div className="container">
                      <Switch>
                          <Route
                              exact
                              path="/"
                              component={UserIsAuthenticated(Dashboard)}
                              // component={Dashboard}
                          />
                          <Route
                              exact
                              path="/client/add"
                              component={UserIsAuthenticated(AddClient)}
                              // component={AddClient}
                          />
                          <Route
                              exact
                             path="/client/edit/:id"
                             component={UserIsAuthenticated(EditClient)}
                             // component={EditClient}
                          />
                          <Route
                              exact
                              path="/client/:id"
                              component={UserIsAuthenticated(ClientDetails)}
                              // component={ClientDetails}
                          />
                          <Route
                              exact
                              path="/login"
                              component={UserIsNotAuthenticated(Login)}
                              // component={Login}
                          />
                      </Switch>
                  </div>
              </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
