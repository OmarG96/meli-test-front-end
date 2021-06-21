import React from "react";
import renderWithProvider from "../../../utils/tests/renderWithProvider";
import ListItems from ".";
import { screen } from "@testing-library/react";
import { SEARCH_FETCH, SEARCH_FETCH_SUCCESS } from "../ListItems/actionTypes";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "http://localhost:3000/items?search=EXAMPLE123",
  }),
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => jest.fn(),
}));

jest.mock("./actions", () => ({
  ...jest.requireActual("./actions"),
  onFetch: jest.fn(),
}));

describe("GIVEN ListItems", () => {
  describe("WHEN is rendered", () => {
    it("THEN match to snapshot", async () => {
      const { asFragment } = renderWithProvider(<ListItems />, {
        onPrepareStore: (store) =>
          store.dispatch({
            type: SEARCH_FETCH_SUCCESS,
            payload: {
              data: {
                categories: ["example1", "example2", "example3"],
                items: [
                  {
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
                    description:
                      "description description description. Description.",
                  },
                ],
              },
            },
          }),
      });

      await screen.findByText("Title title title");
      expect(asFragment()).toMatchSnapshot();
    });
    it("THEN match to snapshot when items is empty", async () => {
      const { asFragment } = renderWithProvider(<ListItems />, {
        onPrepareStore: (store) =>
          store.dispatch({
            type: SEARCH_FETCH,
          }),
      });

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
