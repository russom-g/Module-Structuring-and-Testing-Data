import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.

test("Valid single-digit card", () => {
  assert.equal(getCardValue("9♠"), 9);
});
test("Valid single-digit card", () => {
  assert.equal(getCardValue("8♥"), 8);
});
test("Valid single-digit card", () => {
  assert.equal(getCardValue("7♣"), 7);
});
test("Valid single-digit card", () => {
  assert.equal(getCardValue("6♦"), 6);
});
test("Valid single-digit card", () => {
  assert.equal(getCardValue("5♥"), 5);
});
test("Valid single-digit card", () => {
  assert.equal(getCardValue("4♦"), 4);
});
test("Valid single-digit card", () => {
  assert.equal(getCardValue("3♠"), 3);
});
test("Valid single-digit card", () => {
  assert.equal(getCardValue("2♣"), 2);
});

test("Arbitrary non-card string", () => {
  assert.throws(
    () => getCardValue("invalid"),
    /Expected a number followed by a suit, but got "invalid"/,
    "Expected clear error"
  );
});
// TODO: What other invalid card cases can you think of?
