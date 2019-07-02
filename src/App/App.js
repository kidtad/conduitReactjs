import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "./../Helpers/history";

import "./App.css";
import Home from "../Home/index";
import Header from "../components/Header/Header";
import Login from "../Login/Login";
import Register from "../Register/Register";
import EditArticle from "../Editor/EditArticle";
import Profile from "../Profile";
import Article from "./../Artitle/Article";
import Settings from "../settingsPage/settings";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/editor/:slug?" component={EditArticle} />
          <Route exact path="/profile/:user" component={Profile} />
          <Route exact path="/article/:slug" component={Article} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
