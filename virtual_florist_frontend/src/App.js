import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Layout from "./Components/Layout/Layout";
import Wiki from "./Components/Wiki/Wiki";
import MainPage from "./Components/MainPage/MainPage";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/mainPage" component={MainPage} />
          <Route path="/wiki" component={Wiki} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
