import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeTemplate from "./template/HomeTemplate";
import { routesHome, routesAdmin } from "./routes";
import PageNotFound from "./Page/PageNotFound";

import { connect } from "react-redux";
import * as action from "./../src/redux/Action";
import * as ActionType from "./redux/Constants/ActionType";
import AdminTemplate from "./template/AdminTemplate";

class App extends Component {
  render() {
    const showMenuHome = (routes) => {
      if (routes && routes.length > 0) {
        return routes.map((item, index) => {
          return (
            <HomeTemplate
              key={index}
              exact={item.exact}
              path={item.path}
              Component={item.component}
            />
          );
        });
      }
    };
    const showMenuAdmin = (routes) => {
      if (routes && routes.length > 0) {
        return routes.map((item, index) => {
          return (
            <AdminTemplate
              key={index}
              exact={item.exact}
              path={item.path}
              Component={item.component}
            />
          );
        });
      }
    };
    return (
      <BrowserRouter>
        <div>
          <Switch>
            {showMenuHome(routesHome)}
            {showMenuAdmin(routesAdmin)}
            <Route path="" component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  _getCredentialsFormLocal = () => {
    const credentialsStr = localStorage.getItem("credentials");
    // console.log(credentialsStr);
    const credentialsStrAdmin = localStorage.getItem("userAdmin");
    if (credentialsStr) {
      // this.props.dispatch(action.actLoginAPI(JSON.parse(credentialsStr)));
      this.props.dispatch({
        type: ActionType.GET_LIST_LOGIN,
        data: JSON.parse(credentialsStr),
      });
    }
    if (credentialsStrAdmin) {
      this.props.dispatch({
        type: ActionType.GET_LIST_LOGIN,
        data: JSON.parse(credentialsStrAdmin),
      });
    }
  };
  componentDidMount() {
    this._getCredentialsFormLocal();
  }
}

export default connect()(App);
