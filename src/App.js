import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { RouteContainer } from './containers'

class App extends Component {
    render() {
      return (
        <Router>
          <Route path='/' component={RouteContainer} />
        </Router>
      );
    }
  }

export default App;
