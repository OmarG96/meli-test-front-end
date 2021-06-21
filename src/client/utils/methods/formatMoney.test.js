import { formatMoney } from "./formatMoney";

describe("GIVEN formatMoney func", () => {
  describe("WHEN is called", () => {
    it("THEN should return a correct data if is executed with default value", () => {
      const moneyFormated = formatMoney();
      expect(moneyFormated).toEqual("$ 0");
    });

    it("THEN should return a correct data", () => {
      const moneyFormated = formatMoney(12356);
      expect(moneyFormated).toEqual("$ 12,356");
    });
  });
});
