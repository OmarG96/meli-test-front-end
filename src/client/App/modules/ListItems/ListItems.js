import React from "react";
import { useSelector } from "react-redux";

import { CardContainer, GridContainer, Breadcrumb } from "../../../common";
import { Item } from "./components";

import "./style.scss";

const ListItems = () => {
  const { data, loading, error } = useSelector(
    ({ layout: { search } }) => search
  );
  const { items, categories } = data || { items: [] };

  return (
    <GridContainer>
      <Breadcrumb path={categories} />
      {items.length ? (
        <CardContainer>
          {items.map((itemData) => (
            <Item key={itemData.id} data={itemData} />
          ))}
        </CardContainer>
      ) : null}
    </GridContainer>
  );
};

export default ListItems;
