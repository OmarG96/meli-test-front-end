import React from "react";
import SearchBar from ".";
import { fireEvent, render } from "@testing-library/react";

describe("GIVEN SearchBar", () => {
  describe("WHEN is rendered", () => {
    it("THEN match to snapshot", () => {
      const { asFragment } = render(<SearchBar />);
      expect(asFragment()).toMatchSnapshot();
    });

    it("THEN should onSearch will be called with right params", () => {
      const onSearch = jest.fn();
      const { getByRole } = render(<SearchBar onSearch={onSearch} />);
      const searchbox = getByRole("searchbox");

      fireEvent.change(searchbox, { target: { value: "example" } });
      fireEvent.submit(searchbox);

      expect(onSearch).toBeCalledWith("example");
    });
  });
});
