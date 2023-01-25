import { reverseArray, withdraw, getAdults } from "./calculator";

it("should get array with numbers", () => {
  const result = reverseArray([4, 2, 1, 3]);

  expect(result.length).not.toEqual(0);
});

it("should get array", () => {
  const result = reverseArray([4, 2, 1, 3]);

  expect(result).not.toEqual(undefined);
});

it("should get reverse numbers", () => {
  const result = reverseArray([4, 2, 1, 3]);

  expect(result).toEqual([3, 1, 2, 4]);
});

it("should get numbers", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);

  expect(result).toEqual(37);
});

it("should be number", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);

  expect(typeof result).toEqual("number");
});

it("not must be string", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);

  expect(typeof result).not.toEqual("string");
});

it("must be object", () => {
  const result = getAdults({ "John Doe": 19, Tom: 16, Bob: 18 });

  expect(typeof result).toEqual("object");
});

it("in value must be number", () => {
  const result = getAdults({ "John Doe": 19, Tom: 16, Bob: 18 });
  const arr = Object.values(result);
  arr.forEach((ell) => {
    expect(typeof ell).toEqual("number");
  });
});

it("in object must be keys", () => {
  const result = getAdults({ "John Doe": 19, Tom: 16, Bob: 18 });
  const arr = Object.keys(result);
  expect(arr.length).not.toEqual(0);
});
