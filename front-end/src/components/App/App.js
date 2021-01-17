import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "../Header/Header";
import Home from "../../pages/Home/Home";
import ContentDetails from "../../pages/ContentDetails/ContentDetails";
import ContentModify from "../../pages/ContentModify/ContentModify";
import PageNotFound from "../../pages/PageNotFound/PageNotFound";
import ModifyInventory from "../../pages/ModifyInventory/ModifyInventory";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app__container">
          <Switch>
            <Route exact path="/">
              <Redirect to="/warehouse" />
            </Route>
            {/* 1.1 */}
            <Route exact path="/warehouse" render={(routeProps) => <Home {...routeProps} />} />
            {/* 4.1 */}
            <Route exact path="/inventory" render={(routeProps) => <Home {...routeProps} />} />
            {/* 3.2 */}
            <Route exact path="/inventory/new-item" render={(routeProps) => <ModifyInventory {...routeProps} />} />
            {/* 6.2 */}
            <Route exact path="/warehouse/new-item" render={(routeProps) => <ContentModify {...routeProps} />} />
            {/* 2.0 */}
            <Route exact path="/inventory/:id" render={(routeProps) => <ContentDetails {...routeProps} routeType={"inventory"} />} />
            {/* 5.0 */}
            <Route exact path="/warehouse/:id" render={(routeProps) => <ContentDetails {...routeProps} routeType={"warehouse"} />} />
            {/* 3.1 */}
            <Route exact path="/inventory/:id/edit" render={(routeProps) => <ModifyInventory {...routeProps} />} />
            {/* 6.1 */}
            <Route exact path="/warehouse/:id/edit" render={(routeProps) => <ContentModify {...routeProps} />} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <p className="app__copyright">&copy; InStock Inc. All Rights Reserved.</p>
      </div>
    );
  }
}

export default App;
