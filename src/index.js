import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Router, Switch, Route } from 'react-router-dom';
import App from "./App";
import loginScreen from "./screens/loginScreen";
import reducer from "./store/reducers/reducer";
import history from './common/history';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Router history={history}>
        <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/login' component={loginScreen} />
        </Switch>
      </Router>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
