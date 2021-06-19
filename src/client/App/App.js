import React, { useCallback } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, useHistory } from "react-router-dom";

import store from "./store";
import Routes from "./Routes";

import { Layout } from "./modules";

const App = () => {
  const history = useHistory();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
