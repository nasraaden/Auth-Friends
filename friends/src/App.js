import React from 'react';
import './App.css';

import { Route, NavLink, Switch } from "react-router-dom";

import Login from "./components/Login";
import FriendList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <div className="App">
      <div className="nav-bar">
        <h1>FRIENDS</h1>
        <div className="nav-links">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/friends">Friends</NavLink>
        </div>
      </div>
      <Switch>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/friends" component={FriendList}/>
     </Switch>
    </div>
  );
}

export default App;