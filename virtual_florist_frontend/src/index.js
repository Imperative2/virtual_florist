import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import wikiReducer from "./redux/reducers/wikiReducer";
import productsReducer from "./redux/reducers/productsReducer";
import userReducer from "./redux/reducers/userReducer";
import storageReducer from "./redux/reducers/storageReducer";
import basketReducer from "./redux/reducers/basketReducer";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

// import "mdbreact/dist/css/mdb.css";

const rootReducer = combineReducers({
  wiki: wikiReducer,
  products: productsReducer,
  user: userReducer,
  storages: storageReducer,
  basket: basketReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
