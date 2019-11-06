import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Layout from "./Components/Layout/Layout";
import Wiki from "./Components/Wiki/Wiki";
import MainPage from "./Components/Pages/MainPage/MainPage";
import WikiPage from "./Components/Wiki/WikiPage/WikiPage";
import LoginPage from "./Components/Pages/LoginPage/LoginPage";
import SignUpPage from "./Components/Pages/SignUpPage/SignUpPage";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/mainPage" component={MainPage} />
          <Route exact path="/wiki" component={Wiki} />
          <Route exact path="/wiki/:id" component={WikiPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signUp" component={SignUpPage} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
