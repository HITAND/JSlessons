import { calc } from "./calculator.js";

it("Calc answer", () => {
  const result = calc("6 - 9");
  expect(result).toEqual("6 - 9 = -3");
});
