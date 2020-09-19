import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";
import Navibar from "./Mycomponent/Navibar";
// import { Switch } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Mysitebar from './Mysitebar';
import { Home } from "./Mycomponent/Home";
import { About } from "./Mycomponent/About";
import { Users } from "./Mycomponent/Users";

ReactDOM.render(
  <React.StrictMode> 
    {/* <App /> */}
    {/* <Mysitebar/>  */}
    <Router>
      <Navibar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
