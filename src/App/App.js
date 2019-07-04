import React from "react";
import { Router  , Route, Switch } from "react-router-dom";
import { history } from "./../Helpers/history";

import "./App.css";
import Home from "../Page/Home-Page/index";
import Header from "../components/Header/Header";
import Login from "../Page/Login-Page/Login";
import Register from "../Page/Register-Page/Register";
import EditArticle from "../Page/Editor-Page/EditArticle";
import Profile from "../Page/Profile-Page";
import Article from "../Page/Artitle-Page/Article";
import Settings from "../Page/Settings-Page/settings";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login "component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/editor/:slug?" component={EditArticle} />
          <Route exact path="/profile/:user"component={Profile} />
          <Route exact path="/article/:slug" component={Article} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
