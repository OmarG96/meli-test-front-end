import React from "react";
import { node } from "prop-types";

import "./style.scss";

const Header = ({ children }) => {
  return (
    <header>
      <div className="header-content">{children}</div>
    </header>
  );
};

Header.propTypes = {
  children: node,
};

export default Header;
