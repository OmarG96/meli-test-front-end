import React from "react";
import Layout from ".";
import { fireEvent, render, waitFor } from "@testing-library/react";

const mockPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockPush,
  }),
}));

beforeEach(() => {
  jest.resetAllMocks();
});

describe("GIVEN Layout", () => {
  describe("WHEN is rendered", () => {
    it("THEN match to snapshot", async () => {
      const { asFragment } = render(
        <Layout>
          <div>Example</div>
        </Layout>
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it("THEN redirect to / when the logo is clicked", async () => {
      const { getByRole } = render(
        <Layout>
          <div>Example</div>
        </Layout>
      );
      await waitFor(() => fireEvent.click(getByRole("button-logo")));
      expect(mockPush).toHaveBeenCalledWith("/");
    });

    it("THEN should redirect to /items?search=example when a search is performed", async () => {
      const { getByRole } = render(
        <Layout>
          <div>Example</div>
        </Layout>
      );
      const searchbox = getByRole("searchbox");
      await waitFor(() =>
        fireEvent.change(searchbox, { target: { value: "example" } })
      );
      fireEvent.submit(searchbox);
      expect(mockPush).toHaveBeenCalledWith("/items?search=example");
    });
  });
});
