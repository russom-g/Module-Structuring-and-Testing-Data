/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
import { isValidPassword } from "./password-validator.js";
test("password has at least 5 characters", () => {
  // Arrange
  const password = "Az9!";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});

// Have at least one English uppercase letter (A-Z)
test("password has at least uppercase letter", () => {
  const password = "1az9!";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

// Have at least one English lowercase letter (a-z)
test("password has at least lowercase letter", () => {
  const password = "1AZ9!";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

// Have at least one number (0-9)
test("password has at least one number (0-9)", () => {
  const password = "Aazc!";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

// Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
test("password has at least non-alphanumeric symbols", () => {
  const password = "1Az99";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

//  Must not be any previous password in the passwords array.
test("password must not be any previous password in the passwords array", () => {
  const password = "1Az9!";
  const previousPassword = ["1Az9!", "1HBz2!"];
  const result = isValidPassword(password, previousPassword);
  expect(result).toEqual(false);
});

// Valid password returns true.
test("valid password returns true", () => {
  const password = "1Az9!";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});
