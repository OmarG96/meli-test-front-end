import React, { useCallback } from "react";
import { func, node } from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { searchItems } from "./services";

import { SearchBar, Header } from "../../../common";

import logo from "../../../assets/images/Logo_ML.png";
import "./style.scss";
import { onFetch } from "./actions";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  const handleSearch = useCallback(
    (item) => {
      dispatch(onFetch(item));
    },
    [dispatch]
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
