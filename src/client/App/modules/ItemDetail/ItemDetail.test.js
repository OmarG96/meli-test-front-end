import React from "react";
import renderWithProvider from "../../../utils/tests/renderWithProvider";
import ItemDetail from ".";
import { getItemDetail } from "./services";
import { screen } from "@testing-library/react";
import { SEARCH_FETCH_SUCCESS } from "../ListItems/actionTypes";

jest.mock("./services", () => ({
  getItemDetail: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "EXAMPLE123",
  }),
}));

describe("GIVEN ItemDetail", () => {
  describe("WHEN is rendered", () => {
    it("THEN match to snapshot", async () => {
      getItemDetail.mockResolvedValue({
        item: {
          id: "EXAMPLE123",
          title: "Title title title",
          price: {
            currency: "ARS",
            amount: "123456",
          },
          picture: "url.example.com",
          condition: "new",
          free_shipping: true,
          sold_quantity: 123,
          description: "description description description. Description.",
        },
      });
      const { asFragment } = renderWithProvider(<ItemDetail />, {
        onPrepareStore: (store) =>
          store.dispatch({
            type: SEARCH_FETCH_SUCCESS,
            payload: {
              data: { categories: ["example1", "example2", "example3"] },
            },
          }),
      });

      await screen.findByText("Title title title");
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
