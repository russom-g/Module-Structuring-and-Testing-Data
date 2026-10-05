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
  const right = getAngleType(90);
  assert.equal(right, "Right angle");
});

test("Classifies Obtuse angles", () => {
  const Obtuse = getAngleType(91);
  assert.equal(Obtuse, "Obtuse angle");

  const Obtuse1 = getAngleType(120);
  assert.equal(Obtuse1, "Obtuse angle");

  const Obtuse2 = getAngleType(179);
  assert.equal(Obtuse2, "Obtuse angle");
});

test("Classifies Straight angles", () => {
  const Straight = getAngleType(180);
  assert.equal(Straight, "Straight angle");
});

test("Classifies Reflex angles", () => {
  const Reflex = getAngleType(181);
  assert.equal(Reflex, "Reflex angle");

   const Reflex1 = getAngleType(299);
   assert.equal(Reflex1, "Reflex angle");

    const Reflex2 = getAngleType(360);
    assert.equal(Reflex2, "Reflex angle");
});

test("Classifies Invalid angles", () => {
  const Invalid = getAngleType(0);
  assert.equal(Invalid, "Invalid angle");

  const Invalid1 = getAngleType(361);
  assert.equal(Invalid1, "Invalid angle");

  const Invalid2 = getAngleType(399);
  assert.equal(Invalid2, "Invalid angle");

   const Invalid3 = getAngleType(-7);
   assert.equal(Invalid3, "Invalid angle");

    const Invalid4 = getAngleType(30.2);
    assert.equal(Invalid4, "Invalid angle");
});
