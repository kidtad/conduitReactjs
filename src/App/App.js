import React from "react";
import { HashRouter , Route, Switch } from "react-router-dom";
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
    <HashRouter  history={history}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
          <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
          <Route exact path={`${process.env.PUBLIC_URL}/register`} component={Register} />
          <Route exact path={`${process.env.PUBLIC_URL}/editor/:slug?`} component={EditArticle} />
          <Route exact path={`${process.env.PUBLIC_URL}/profile/:user`} component={Profile} />
          <Route exact path={`${process.env.PUBLIC_URL}/article/:slug`} component={Article} />
          <Route exact path={`${process.env.PUBLIC_URL}/settings`} component={Settings} />
        </Switch>
      </div>
    </HashRouter >
  );
}

export default App;
