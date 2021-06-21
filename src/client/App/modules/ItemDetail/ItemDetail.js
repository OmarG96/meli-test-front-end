import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { formatMoney } from "../../../utils/methods/formatMoney";
import { useQueryURL } from "../../../utils/hooks";
import parseCondition from "./utils/parseCondition";
import { getItemDetail } from "./services";

import { Breadcrumb, CardContainer, GridContainer } from "../../../common";

import "./style.scss";

const ItemDetail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [itemData, setItemData] = useState(null);

  const query = useQueryURL();
  const idItem = query.get("id");

  const { data } = useSelector(({ layout: { search } }) => search);
  const { categories } = data || { categories: [] };

  const fetchItemDetail = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getItemDetail(idItem);
      setItemData(response.item);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }, [setIsLoading, idItem]);

  useEffect(() => {
    fetchItemDetail();
  }, [fetchItemDetail]);

  return (
    <GridContainer>
      <Breadcrumb path={categories} />
      {!isLoading && itemData ? (
        <CardContainer>
          <div className="item-detail-root">
            <div className="column-1">
              <div className="picture">
                <img src={itemData.picture} />
              </div>
              <div className="description-container">
                <span className="description-title">
                  Descripción del producto
                </span>
                <span className="description">{itemData.description}</span>
              </div>
            </div>
            <div className="column-2">
              <span className="condition">{`${parseCondition(
                itemData.condition
              )} - ${itemData.sold_quantity} vendidos`}</span>
              <span className="title">{itemData.title}</span>
              <span className="price">
                {formatMoney(itemData.price.amount)}
              </span>
              <button className="buy-button">Comprar</button>
            </div>
          </div>
        </CardContainer>
      ) : null}
    </GridContainer>
  );
};

ItemDetail.propTypes = {};

export default ItemDetail;
