import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Case 2: Number Cards (2-10)
test(`Should return 2 when given number 2 card`, () => {
  expect(getCardValue("2♥")).toEqual(2);
});

test(`Should return 3 when given number 3 card`, () => {
  expect(getCardValue("3♣")).toEqual(3);
});

test(`Should return 4 when given number 4 card`, () => {
  expect(getCardValue("4♠")).toEqual(4);
});

test(`Should return 5 when given number 5 card`, () => {
  expect(getCardValue("5♦")).toEqual(5);
});

test(`Should return 6 when given number 6 card`, () => {
  expect(getCardValue("6♣")).toEqual(6);
});

test(`Should return 7 when given number 7 card`, () => {
  expect(getCardValue("7♠")).toEqual(7);
});

test(`Should return 8 when given number 8 card`, () => {
  expect(getCardValue("8♥")).toEqual(8);
});

test(`Should return 9 when given number 9 card`, () => {
  expect(getCardValue("9♣")).toEqual(9);
});

test(`Should return 10 when given number 10 card`, () => {
  expect(getCardValue("10♦")).toEqual(10);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

