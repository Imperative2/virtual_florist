import React from "react";
import "./App.css";

import MainPage from "./Components/Pages/MainPage/MainPage";
import WikiPage from "./Components/Pages/WikiPage/WikiPage";
import LoginPage from "./Components/Pages/LoginPage/LoginPage";
import SignUpPage from "./Components/Pages/SignUpPage/SignUpPage";
import ContactPage from "./Components/Pages/ContactPage/ContactPage";
import NewWikiEntryPage from "./Components/Pages/NewWikiEntryPage/NewWIkiEntryPage";
import ProductPage from "./Components/Pages/ProductPage/ProductPage";
import NewProductPage from "./Components/Pages/NewProductPage/NewProductPage";
import NewStoragePage from "./Components/Pages/NewStoragePage/NewStoragePage";
import StoragePage from "./Components/Pages/StoragePage/StoragePage";
import ShopPage from "./Components/Pages/ShopPage/ShopPage";
import UserInfoPage from "./Components/Pages/UserInfoPage/UserInfoPage";
import StartPage from "./Components/Pages/StartPage/StartPage";

import Layout from "./Components/Layout/Layout";
import Wiki from "./Components/Wiki/Wiki";
import Products from "./Components/Products/Products";
import Storage from "./Components/Storage/Storage";
import Orders from "./Components/Orders/Orders";
import Shop from "./Components/Shop/Shop";

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
          <Route exact path="/product/newProduct" component={NewProductPage} />
          <Route exact path="/product/:id" component={ProductPage} />
          <Route exact path="/storage/" component={Storage} />
          <Route exact path="/storage/newStorage" component={NewStoragePage} />
          <Route exact path="/storage/:id" component={StoragePage} />
          <Route exact path="/order/" component={Orders} />
          <Route exact path="/shop/" component={Shop} />
          <Route exact path="/shop/:id" component={ShopPage} />
          <Route exact path="/user/userInfo" component={UserInfoPage} />
          <Route path="/" component={StartPage} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
