import React from "react";
import GridContainer from ".";
import { render } from "@testing-library/react";

describe("GIVEN GridContainer", () => {
  describe("WHEN is rendered", () => {
    it("THEN match to snapshot", () => {
      const { asFragment } = render(
        <GridContainer>
          <div>example</div>
        </GridContainer>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
