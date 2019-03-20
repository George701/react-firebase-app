import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppNavBar from './COMPONENTS/layout/AppNavBar';
import Dashboard from './COMPONENTS/layout/Dashboard';
import AddClient from './COMPONENTS/clients/AddClient';
import ClientDetails from './COMPONENTS/clients/ClientDetails';

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
                          <Route exact path="/" component={Dashboard}/>
                          <Route exact path="/client/add" component={AddClient}/>
                          <Route exact path="/client/:id" component={ClientDetails}/>
                      </Switch>
                  </div>
              </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
