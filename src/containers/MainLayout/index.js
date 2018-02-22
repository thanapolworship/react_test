import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import { 
  UserManagementContainer, 
  TagManagementContainer, 
  ChatManagementContainer
} from 'containers'

export class MainLayoutContainer extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/UserManagement">UserManagement</Link>
          </li>
          <li>
            <Link to="/ChatManagement">ChatManagement</Link>
          </li>
          <li>
            <Link to="/TagManagement">TagManagement</Link>
          </li>
        </ul>
        <Route path="/UserManagement" component={UserManagementContainer} />
        <Route path="/ChatManagement" component={ChatManagementContainer} />
        <Route path="/TagManagement" component={TagManagementContainer} />
      </div>
    )
  }
}