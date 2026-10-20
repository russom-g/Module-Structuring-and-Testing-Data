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
    const password = "12345";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(true);
}
);

// Have at least one English uppercase letter (A-Z)
test("password has at least uppercase letter", () => {
  const password = "1234A";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});

// Have at least one English lowercase letter (a-z)
test("password has at least lowercase letter", () => {
  const password = "123Az";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});

// Have at least one number (0-9)
test("password has at least one number (0-9)", () => {
  const password = "12Az9";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});

// Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
test("password has at least non-alphanumeric symbols", () => {
  const password = "1Aaz9!";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});

/*
//  Must not be any previous password in the passwords array. 
test("password ust not be any previous password in the passwords array", () => {
  const password = "1234z";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});
*/