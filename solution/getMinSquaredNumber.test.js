import { getMinSquaredNumber } from "./getMinSquaredNumber";

it("should get array with numbers", () => {
  const result = getMinSquaredNumber([]);
  if (expect([].length).toEqual(0)) {
    return null;
  }
});

it("should get array with numbers", () => {
  const result = getMinSquaredNumber("");
  if (expect(typeof "").toEqual("string")) {
    return null;
  }
});

it("should get array with numbers", () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
  if (expect(result).toEqual(4)) {
    return result;
  }
});
