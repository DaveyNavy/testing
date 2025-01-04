import { calculator } from "./calculator";

test("Add two numbers", () => {
  const actual = calculator.add(3, 4);
  const expected = 7;
  expect(actual).toBe(expected);
});

test("Add negative numbers", () => {
  const actual = calculator.add(-17, 4);
  const expected = -13;
  expect(actual).toBe(expected);
});

test("Subtract two numbers", () => {
  const actual = calculator.subtract(12, 5);
  const expected = 7;
  expect(actual).toBe(expected);
});

test("Subtract negative numbers", () => {
  const actual = calculator.subtract(12, -5);
  const expected = 17;
  expect(actual).toBe(expected);
});

test("Multply two numbers", () => {
  const actual = calculator.multiply(4, 9);
  const expected = 36;
  expect(actual).toBe(expected);
});

test("Multiply large numbers", () => {
  const actual = calculator.multiply(23569, 48955);
  const expected = 1153820395;
  expect(actual).toBe(expected);
});

test("Multiply by negative", () => {
  const actual = calculator.multiply(-5, -6);
  const expected = 30;
  expect(actual).toBe(expected);
});

test("Multiply by zero", () => {
  const actual = calculator.multiply(-5, 0);
  const expected = 0;
  expect(actual).toBe(expected);
});

test("Divide two numbers", () => {
  const actual = calculator.divide(12, 6);
  const expected = 2;
  expect(actual).toBe(expected);
});

test("Divide two numbers with noninteger result", () => {
  const actual = calculator.divide(12, 5);
  const expected = 2.4;
  expect(actual).toBe(expected);
});

test("Divide two numbers with infinite result", () => {
  const actual = calculator.divide(8, 3);
  const expected = 2.67;
  expect(actual).toBe(expected);
});

test("Divide by negative", () => {
  const actual = calculator.divide(8, -3);
  const expected = -2.67;
  expect(actual).toBe(expected);
});

test("Divide by zero", () => {
  const actual = calculator.divide(-5, 0);
  const expected = undefined;
  expect(actual).toBe(expected);
});
