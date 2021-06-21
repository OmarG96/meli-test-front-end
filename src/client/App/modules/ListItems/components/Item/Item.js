import React, { useCallback } from "react";
import { bool, number, oneOfType, shape, string } from "prop-types";

import { formatMoney } from "../../../../../utils/methods/formatMoney";

import iconShipping from "../../../../../assets/images/ic_shipping.png";
import "./style.scss";
import { useHistory } from "react-router-dom";

const Item = ({ data }) => {
  const history = useHistory();
  const handleClick = useCallback(() => {
    history.push(`/items/${data.id}`);
  }, [history]);

  return (
    <div role="item" className="item-root" onClick={handleClick}>
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

Item.propTypes = {
  data: shape({
    id: string,
    title: string,
    price: shape({
      currency: string,
      amount: oneOfType([string, number]),
    }),
    picture: string,
    condition: string,
    free_shipping: bool,
    sold_quantity: oneOfType([string, number]),
    description: string,
  }),
};

export default Item;
