export function analyzeArray(arr) {
  const max = arr.reduce(
    (currMax, curr) => (currMax = curr > currMax ? curr : currMax)
  );
  const min = arr.reduce(
    (currMin, curr) => (currMin = curr < currMin ? curr : currMin)
  );
  const length = arr.length;
  const average = arr.reduce((sum, curr) => (sum += curr)) / length;
  return {
    max,
    min,
    average,
    length,
  };
}
