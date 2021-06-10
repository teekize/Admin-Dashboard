

import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User";
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  return (

    <Router>
      <Topbar />

      <div className="container">

        <Sidebar />


        <Switch>

          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>

          <Route exact path="/user/:userId">
            <User />
          </Route>

        </Switch>

      </div>
    </Router>



  );
}

export default App;
