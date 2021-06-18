import React from "react";
import { node } from "prop-types";

import "./style.scss";

const CardContainer = ({ children }) => {
  return <div className="card-container-root">{children}</div>;
};

CardContainer.propTypes = {
  children: node,
};

export default CardContainer;
