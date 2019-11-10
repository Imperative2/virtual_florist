import React from "react";
import "./App.css";

import Layout from "./Components/Layout/Layout";
import Wiki from "./Components/Wiki/Wiki";
import MainPage from "./Components/Pages/MainPage/MainPage";
import WikiPage from "./Components/Pages/WikiPage/WikiPage";
import LoginPage from "./Components/Pages/LoginPage/LoginPage";
import SignUpPage from "./Components/Pages/SignUpPage/SignUpPage";
import ContactPage from "./Components/Pages/ContactPage/ContactPage";
import NewWikiEntryPage from "./Components/Pages/NewWikiEntryPage/NewWIkiEntryPage";
import ProductPage from "./Components/Pages/ProductPage/ProductPage";

import Products from "./Components/Products/Products";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/mainPage" component={MainPage} />
          <Route exact path="/wiki" component={Wiki} />
          <Route exact path="/wiki/newPage" component={NewWikiEntryPage} />
          <Route exact path="/wiki/:id" component={WikiPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signUp" component={SignUpPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/product" component={Products} />
          <Route exact path="/product/:id" component={ProductPage} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
