import assert from "node:assert";
import test from "node:test";

import { getAngleType } from "../implement/1-get-angle-type.js";

// TODO: Write tests to cover all cases, including boundary and invalid cases.
// Example: Identify Right Angles

test("Classifies Acute angles", () => {
  const Acute = getAngleType(1);
  assert.equal(Acute, "Acute angle");

  const Acute1 = getAngleType(45);
  assert.equal(Acute1, "Acute angle");

  const Acute2 = getAngleType(89);
  assert.equal(Acute2, "Acute angle");
});

test("Classifies right angles", () => {
  const right = getAngleType(90, );
  assert.equal(right, "Right angle");
});

test("Classifies Obtuse angles", () => {
  const Obtuse = getAngleType(99);
  assert.equal(Obtuse, "Obtuse angle");
});

test("Classifies Straight angles", () => {
  const Straight = getAngleType(180);
  assert.equal(Straight, "Straight angle");
});

test("Classifies Reflex angles", () => {
  const Reflex = getAngleType(181);
  assert.equal(Reflex, "Reflex angle");
});

test("Classifies Invalid angles", () => {
  const Invalid = getAngleType(399);
  assert.equal(Invalid, "Invalid angle");
});