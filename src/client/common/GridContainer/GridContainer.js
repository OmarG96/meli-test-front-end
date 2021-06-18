import React from "react";
import { node } from "prop-types";

import "./style.scss";

const GridContainer = ({ children }) => {
  return <div className="grid-container-root">{children}</div>;
};

GridContainer.propTypes = {
  children: node,
};

export default GridContainer;
