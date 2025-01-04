import { analyzeArray } from "./analyze-array";

test("Get array max", () => {
  const actual = analyzeArray([1, 8, 3, 4, 2, 6]).max;
  const expected = 8;
  expect(actual).toBe(expected);
});

test("Get array min", () => {
  const actual = analyzeArray([1, 8, 3, 4, 2, 6]).min;
  const expected = 1;
  expect(actual).toBe(expected);
});

test("Get array average", () => {
  const actual = analyzeArray([1, 8, 3, 4, 2, 6]).average;
  const expected = 4;
  expect(actual).toBe(expected);
});

test("Get array length", () => {
  const actual = analyzeArray([1, 8, 3, 4, 2, 6]).length;
  const expected = 6;
  expect(actual).toBe(expected);
});
