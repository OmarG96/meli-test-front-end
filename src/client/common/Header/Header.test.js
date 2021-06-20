import React from "react";
import Header from ".";
import { fireEvent, render } from "@testing-library/react";

describe("GIVEN SearchBar", () => {
  describe("WHEN is rendered", () => {
    it("THEN match to snapshot", () => {
      const { asFragment } = render(
        <Header>
          <div>example</div>
        </Header>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
