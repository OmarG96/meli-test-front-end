import React, { useCallback } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "./store";
import Routes from "./Routes";

import { Layout } from "./modules";

const App = () => {
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
