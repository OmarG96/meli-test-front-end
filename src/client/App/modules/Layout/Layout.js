import React, { useCallback } from "react";
import { func, node } from "prop-types";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { SearchBar, Header } from "../../../common";

import logo from "../../../assets/images/Logo_ML.png";
import "./style.scss";
import { onFetch } from "./actions";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSearch = useCallback(
    (item) => {
      dispatch(onFetch(item));
      history.push("/");
    },
    [dispatch, history]
  );

  return (
    <div className="layout">
      <Header>
        <img className="header-logo" src={logo} />
        <SearchBar onSearch={handleSearch} />
      </Header>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: node,
  onSearch: func,
};

export default Layout;
