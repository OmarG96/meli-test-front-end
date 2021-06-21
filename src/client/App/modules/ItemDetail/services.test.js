import { http } from "../../../utils/http";
import { getItemDetail } from "./services";

jest.mock("../../../utils/http");

describe("GIVEN item detail services", () => {
  describe("WHEN getItemDetail is called", () => {
    it("THEN is called with right params", async () => {
      getItemDetail("123456");
      expect(http.get).toHaveBeenCalledWith("/api/items/123456");
    });

    it("THEN returns right data", async () => {
      http.get.mockImplementationOnce(() => Promise.resolve({ data: "data" }));

      const response = await getItemDetail("example");
      expect(response).toEqual("data");
    });
  });
});
