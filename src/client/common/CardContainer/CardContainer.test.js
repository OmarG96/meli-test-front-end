import React from "react";
import CardContainer from ".";
import { render } from "@testing-library/react";

describe("GIVEN CardContainer", () => {
  describe("WHEN is rendered", () => {
    it("THEN match to snapshot", () => {
      const { asFragment } = render(
        <CardContainer>
          <div>example</div>
        </CardContainer>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
