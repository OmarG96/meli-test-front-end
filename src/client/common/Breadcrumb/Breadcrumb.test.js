import React from "react";
import Breadcrumb from ".";
import { render } from "@testing-library/react";

describe("GIVEN Breadcrumb", () => {
  describe("WHEN is rendered", () => {
    it("THEN match to snapshot", () => {
      const path = ["example1", "example2", "example3"];
      const { asFragment } = render(<Breadcrumb path={path} />);
      expect(asFragment()).toMatchSnapshot();
    });

    it("THEN match to snapshot when path is []", () => {
      const { asFragment } = render(<Breadcrumb />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
