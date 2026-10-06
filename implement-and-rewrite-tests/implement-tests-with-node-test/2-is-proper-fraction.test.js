import assert from "node:assert";
import test from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

test("Basic proper fraction", () => {
  // Example: 1/2 is a proper fraction
  assert.equal(isProperFraction(1, 2), true);
});

// Proper fraction
test("Decimal proper fraction", () => {
  assert.equal(isProperFraction(0.5, 1.5), true);
});

test("0 numerator proper fraction", () => {
  assert.equal(isProperFraction(0, 5), true);
});

test("Negative numerator proper fraction", () => {
  assert.equal(isProperFraction(-9, 1), true);
});

test("Both negatives proper fraction", () => {
  assert.equal(isProperFraction(-7, -3), true);
});

test("Large number proper fraction", () => {
  assert.equal(isProperFraction(999, 1000), true);
});

test("Very small denominator proper fraction", () => {
  assert.equal(isProperFraction(1, 1000000), true);
});

// Improper fractions

test("Decimal improper fraction", () => {
  assert.equal(isProperFraction(1.2, 1.1), false);
});

test("Numerator larger improper fraction", () => {
  assert.equal(isProperFraction(5, 3), false);
});

test("Both equal improper fraction", () => {
  assert.equal(isProperFraction(4, 4), false);
});

test("0 denominator improper fraction", () => {
  assert.equal(isProperFraction(7, 0), false);
});

test("Both 0 improper fraction", () => {
  assert.equal(isProperFraction(0, 0), false);
});

test("Both equal negatives improper fraction", () => {
  assert.equal(isProperFraction(-4, -4), false);
});

test("Negative denominator improper fraction", () => {
  assert.equal(isProperFraction(2, -9), false);
});
