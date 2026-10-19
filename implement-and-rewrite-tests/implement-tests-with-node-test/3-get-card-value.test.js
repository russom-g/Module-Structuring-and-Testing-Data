import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.

test("Valid Ace card", () => {
  assert.equal(getCardValue("A♠"), 11);
});

test("Valid Jack card", () => {
  assert.equal(getCardValue("J♥"), 10);
});

test("Valid Queen card", () => {
  assert.equal(getCardValue("Q♣"), 10);
});

test("Valid King card", () => {
  assert.equal(getCardValue("K♦"), 10);
});

test("Valid double-digit card", () => {
  assert.equal(getCardValue("10♣"), 10);
});

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

test("Invalid cards", () => {
  assert.throws(() => getCardValue(""), "invalid");
  assert.throws(() => getCardValue("♠"), "invalid");
  assert.throws(() => getCardValue("A"), "invalid");
  assert.throws(() => getCardValue("5"), "invalid");
  assert.throws(() => getCardValue("1♠"), "invalid");
  assert.throws(() => getCardValue("0♠"), "invalid");
  assert.throws(() => getCardValue("AA"), "invalid");
  assert.throws(() => getCardValue("11♠"), "invalid");
  assert.throws(() => getCardValue("X♠"), "invalid");
  assert.throws(() => getCardValue("5♠♥"), "invalid");
});
