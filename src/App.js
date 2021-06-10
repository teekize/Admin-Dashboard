

import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userlist/UserList";
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

          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>



  );
}

export default App;
