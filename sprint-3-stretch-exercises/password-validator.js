export function isValidPassword(password) {
  const symbols = ["!", "#", "$", "%", ".", "*", "&"];
  const hasSymbol = password.includes(symbols);

  for (const char of password) {
    if (
      (char >= "A" && char <= "Z") ||
      (char >= "A" && char <= "Z") ||
      (char >= 0 && char <= 9) ||
      !hasSymbol
    ) {
      return true;
    }
    return false;
  }
}
