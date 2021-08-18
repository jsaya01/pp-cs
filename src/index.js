/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";

import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Login from "views/Login";
import Forgot from "views/Forgot";
import ChangePassword from "views/ChangePassword";
import Users from "views/Users";
import UserDetails from "views/UserDetail";
import Questions from "views/Questions";
import Confirmation from "views/Confirmation";
import { ToastProvider } from 'react-toast-notifications';
import { Provider } from 'react-redux';
import { store } from 'store'

ReactDOM.render(
  <Provider store={store}>
    <ToastProvider styles={{
      container: (provided) => ({ ...provided, zIndex: 999999, top: 50 })
    }}>
      <HashRouter>
        <Switch>          
          <Route path="/login" component={Login} />
          <Route path="/forgot" component={Forgot} />
          <Route path="/change-password" component={ChangePassword} />
          <Route path="/users" component={Users} />
          <Route path="/user-details" component={UserDetails} />
          <Route path="/questions" component={Questions} />
          <Route path="/confirmation" component={Confirmation} />
          <Redirect from="/" to="/login" />
        </Switch>
      </HashRouter>
    </ToastProvider>
  </Provider>
  ,
  document.getElementById("root")
);
