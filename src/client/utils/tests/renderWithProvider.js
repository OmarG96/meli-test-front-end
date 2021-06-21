import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../App/store";

const renderWithProvider = (
  ui,
  { onPrepareStore = () => {}, ...renderOptions } = {}
) => {
  onPrepareStore(store);
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export default renderWithProvider;
