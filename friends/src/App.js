import React from 'react';
import './App.css';

import { Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import FriendList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/friends" component={FriendList}/>
        <Route path="/login" component={Login}/>
     </Switch>
    </div>
  );
}

export default App;