import assert from "node:assert";
import test from "node:test";

import { getAngleType } from "../implement/1-get-angle-type.js";

// TODO: Write tests to cover all cases, including boundary and invalid cases.
// Example: Identify Right Angles

test("Classifies Acute angles", () => {
  const Acute = getAngleType(89);
  assert.equal(Acute, "Acute angle");
});

test("Classifies right angles", () => {
  const right = getAngleType(90);
  assert.equal(right, "Right angle");
});

test("Classifies Obtuse angles", () => {
  const Obtuse = getAngleType(89);
  assert.equal(Obtuse, "Obtuse angle");
});

