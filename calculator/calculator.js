export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => (a * b == 0 ? 0 : a * b),
  divide: (a, b) => (b == 0 ? undefined : Math.round((a / b) * 100) / 100),
};
