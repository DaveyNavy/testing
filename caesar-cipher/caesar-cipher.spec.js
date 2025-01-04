import { caesarCipher } from "./caesar-cipher";

test("Shift alpha chars by constant", () => {
  const actual = caesarCipher("abc", 3);
  const expected = "def";
  expect(actual).toBe(expected);
});

test("Shift alpha chars by constant and wrap", () => {
  const actual = caesarCipher("xyz", 3);
  const expected = "abc";
  expect(actual).toBe(expected);
});

test("Preserve capitalization", () => {
  const actual = caesarCipher("HeLLo", 3);
  const expected = "KhOOr";
  expect(actual).toBe(expected);
});

test("Ignore punctuation and spaces", () => {
  const actual = caesarCipher("a!b c$# d", 2);
  const expected = "c!d e$# f";
  expect(actual).toBe(expected);
});

test("Huge shift value", () => {
  const actual = caesarCipher("abc", 1000);
  const expected = "mno";
  expect(actual).toBe(expected);
});
