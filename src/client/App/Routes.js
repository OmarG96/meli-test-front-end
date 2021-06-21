import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { ListItems, ItemDetail } from "./modules";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/items/:id">
        <ItemDetail />
      </Route>
      <Route exact path="/items">
        <ListItems />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default Routes;
