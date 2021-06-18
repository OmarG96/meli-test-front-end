import React, { useCallback } from "react";
import { Provider } from "react-redux";

import store from "./store";

import { Layout, ListItems } from "./modules";

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <ListItems />
      </Layout>
    </Provider>
  );
};

export default App;
