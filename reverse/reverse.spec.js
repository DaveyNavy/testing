import { reverse } from "./reverse";

test("reverse string of chars", () => {
  const actual = reverse("ABCDE");
  const expected = "EDCBA";
  expect(actual).toBe(expected);
});

test("reverse string of chars with spaces", () => {
  const actual = reverse("I am a string");
  const expected = "gnirts a ma I";
  expect(actual).toBe(expected);
});

test("reverse string of of nonalpha chars", () => {
  const actual = reverse("123 #$");
  const expected = "$# 321";
  expect(actual).toBe(expected);
});
