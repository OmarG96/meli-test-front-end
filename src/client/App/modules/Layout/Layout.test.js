import React from "react";
import renderWithProvider from "../../../utils/tests/renderWithProvider";
import Layout from ".";
import { fireEvent, waitFor } from "@testing-library/react";

const mockPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockPush,
  }),
}));

describe("GIVEN Layout", () => {
  describe("WHEN is rendered", () => {
    it("THEN match to snapshot", async () => {
      const { asFragment } = renderWithProvider(
        <Layout>
          <div>Example</div>
        </Layout>
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it("THEN redirect to / when the logo is clicked", async () => {
      const { getByRole } = renderWithProvider(
        <Layout>
          <div>Example</div>
        </Layout>
      );
      await waitFor(() => fireEvent.click(getByRole("button-logo")));
      expect(mockPush).toHaveBeenCalledWith("/");
    });

    it("THEN should execute onFetch and redirect to / when a search is performed", async () => {
      const { getByRole } = renderWithProvider(
        <Layout>
          <div>Example</div>
        </Layout>
      );
      const searchbox = getByRole("searchbox");
      await waitFor(() => {
        fireEvent.change(searchbox, { target: { value: "example" } });
        fireEvent.submit(searchbox);
      });
      expect(mockPush).toHaveBeenCalledWith("/");
    });
  });
});
