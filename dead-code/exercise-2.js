// Remove the unused code that does not contribute to the final console log
// The countAndCapitalisePets function should continue to work for any reasonable input it's given, and you shouldn't modify the pets variable.

const pets = ["parrot", "hamster", "horse", "dog", "hamster", "cat", "hamster"];

function countAndCapitalisePets(petsArr) {
  const petCount = {};

  petsArr
    .filter((pet) => pet[0] === "h")
    .forEach((pet) => {
      const capitalisedPet = pet.toUpperCase();

      if (petCount[capitalisedPet]) {
        petCount[capitalisedPet] += 1;
      } else {
        petCount[capitalisedPet] = 1;
      }
    });

  return petCount;
}

const animals = ["lion", "hyena", "elephant", "hippo", "tiger", "hippo"];
console.log(countAndCapitalisePets(animals));
