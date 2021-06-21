import { http } from "../../../utils/http";
import { searchItems } from "./services";

jest.mock("../../../utils/http");

describe("GIVEN layout services", () => {
  describe("WHEN searchItems is called", () => {
    it("THEN is called with right params", async () => {
      searchItems("example");
      expect(http.get).toHaveBeenCalledWith("/api/items", {
        params: { q: "example" },
      });
    });

    it("THEN returns right data", async () => {
      http.get.mockImplementationOnce(() => Promise.resolve({ data: "data" }));

      const response = await searchItems("example");
      expect(response).toEqual("data");
    });
  });
});
