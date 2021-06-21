import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useQueryURL } from "../../../utils/hooks";
import { onFetch } from "./actions";

import { CardContainer, GridContainer, Breadcrumb } from "../../../common";
import { Item } from "./components";

import "./style.scss";

const ListItems = () => {
  const dispatch = useDispatch();
  const query = useQueryURL();
  const itemToSearch = query.get("search");

  const { data, loading, error } = useSelector(
    ({ listItems: { search } }) => search
  );
  const { items = [], categories = [] } = data || {};

  useEffect(() => {
    dispatch(onFetch(itemToSearch));
  }, [itemToSearch, dispatch]);

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
