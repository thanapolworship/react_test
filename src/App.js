import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { RouteContainer} from 'containers'

export class App extends Component {
  render() {
    return (
      <Router>
        <RouteContainer/>
      </Router>
    );
  }
}

