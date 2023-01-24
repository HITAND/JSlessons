import {} from "./calculator";

it("17 и в Африке 17", () => {
  expect(17).toEqual(17);
});

it("17 и в Африке 17", () => {
  expect(18).not.toEqual(17);
});

it("should get only even numbers from array", () => {
  const getEvenNumbers = (numbers) => {
    return numbers.filter((num) => num % 2 === 0);
  };
  const result = getEvenNumbers([1, 2, 4]);

  expect(result).toEqual([2, 4]);
});
