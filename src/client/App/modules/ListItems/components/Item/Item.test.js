import React from "react";
import Item from ".";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

const mockPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockPush,
  }),
}));

const dummyData = {
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
};

describe("GIVEN Item", () => {
  describe("WHEN is rendered", () => {
    it("THEN match to snapshot", async () => {
      const { asFragment } = render(<Item data={dummyData} />);
      await screen.findByText("Title title title");
      expect(asFragment()).toMatchSnapshot();
    });

    it("THEN match to snapshot when free shipping is false", async () => {
      const { asFragment } = render(
        <Item data={{ ...dummyData, free_shipping: false }} />
      );
      await screen.findByText("Title title title");
      expect(asFragment()).toMatchSnapshot();
    });

    it("THEN redirect to /items/EXAMPLE123 when is clicked", async () => {
      render(<Item data={dummyData} />);
      await waitFor(() => fireEvent.click(screen.getByRole("item")));

      expect(mockPush).toBeCalledWith("/items/EXAMPLE123");
    });
  });
});
