import parseCondition from "./parseCondition";

describe("GIVEN parseCondition", () => {
  describe("WHEN is called", () => {
    it("THEN returns right values", () => {
      expect(parseCondition("new")).toEqual("Nuevo");
      expect(parseCondition("used")).toEqual("Usado");
    });
  });
});
