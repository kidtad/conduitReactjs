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
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/editor/:slug?" component={EditArticle} />
          <Route path="/profile/:user" component={Profile} />
          <Route path="/article/:slug" component={Article} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
