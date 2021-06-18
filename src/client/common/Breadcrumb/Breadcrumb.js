import React from "react";
import { arrayOf, string } from "prop-types";

import "./style.scss";

const Breadcrumb = ({ path = [] }) => {
  return (
    <div className="breadcrumb-root">
      {path.map((route) => (
        <span className="breadcrumb-route">{route}</span>
      ))}
    </div>
  );
};

Breadcrumb.propTypes = {
  path: arrayOf(string),
};

export default Breadcrumb;
