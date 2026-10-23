import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

test(`should return true for basic proper fraction`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});

test(`should return true for decimal proper fraction`, () => {
  expect(isProperFraction(0.5, 1.5)).toEqual(true);
});

test(`should return true for 0 numerator proper fraction`, () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});

test(`should return true for very small denominator proper fraction`, () => {
  expect(isProperFraction(1, 1000000)).toEqual(true);
});

test(`should return false for negative denominator improper fraction`, () => {
  expect(isProperFraction(2, -9)).toEqual(true);
});


// Improper fractions
test(`should return false for very small denominator proper fraction`, () => {
  expect(isProperFraction(1.2, 1.1)).toEqual(false);
});

test(`should return false for large numerator improper fraction`, () => {
  expect(isProperFraction(5, 3)).toEqual(false);
});

test(`should return false for both equal numbers improper fraction`, () => {
  expect(isProperFraction(4, 4)).toEqual(false);
});

test(`should return false for 0 denominator improper fraction`, () => {
  expect(isProperFraction(7, 0)).toEqual(false);
});

test(`should return false for both 0 improper fraction`, () => {
  expect(isProperFraction(0, 0)).toEqual(false);
});

test(`should return false for both negative improper fraction`, () => {
  expect(isProperFraction(-4, -4)).toEqual(false);
});

test(`should return true for negative numerator proper fraction`, () => {
  expect(isProperFraction(-9, 1)).toEqual(false);
});

test(`should return true for negative proper fraction`, () => {
  expect(isProperFraction(-7, -3)).toEqual(false);
});

test(`should return true for negative numerator proper fraction`, () => {
  expect(isProperFraction(-9, 1)).toEqual(false);
});
