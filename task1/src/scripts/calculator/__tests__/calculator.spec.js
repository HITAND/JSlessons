import { sum } from "../calculator";
import { mult } from "../calculator";

it("should get sum of numbers", () => {
  const result = sum(8, 4);

  expect(result).toEqual(12);
});

it("should multiply numbers", () => {
  const result = mult(2, 3);

  expect(result).toEqual(6);
});