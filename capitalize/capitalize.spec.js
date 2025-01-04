import { capitalize } from "./capitalize";

test("capitalize string of chars", () => {
  const actual = capitalize("abcde");
  const expected = "Abcde";
  expect(actual).toBe(expected);
});

test("capitalize string of chars with spaces", () => {
  const actual = capitalize("abcde fg hij");
  const expected = "Abcde fg hij";
  expect(actual).toBe(expected);
});

test("string contains non alpha chars", () => {
  const actual = capitalize("b#2als");
  const expected = "B#2als";
  expect(actual).toBe(expected);
});

test("first char is already capitalized", () => {
  const actual = capitalize("ABCDE");
  const expected = "ABCDE";
  expect(actual).toBe(expected);
});

test("first char is nonalpha", () => {
  const actual = capitalize("#asdb");
  const expected = "#asdb";
  expect(actual).toBe(expected);
});
