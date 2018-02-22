import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import { 
  MainLayoutContainer
} from 'containers'

export class RouteContainer extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/"  component={MainLayoutContainer} />
      </Switch>
    )
  }
}