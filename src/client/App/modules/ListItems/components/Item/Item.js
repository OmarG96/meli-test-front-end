import React from "react";

import { formatMoney } from "../../../../../utils/methods/formatMoney";

import iconShipping from "../../../../../assets/images/ic_shipping.png";
import "./style.scss";

const Item = ({ data }) => {
  return (
    <div className="item-root">
      <div className="item">
        <div className="picture">
          <img src={data.picture} />
        </div>
        <div className="detail">
          <div className="header">
            <div className="price">
              {formatMoney(data.price.amount)}
              {data.free_shipping ? (
                <img className="icon-shipping" src={iconShipping} />
              ) : null}
            </div>
            <div className="state-name">{data.state_name}</div>
          </div>
          <div className="title">{data.title}</div>
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {};

export default Item;
