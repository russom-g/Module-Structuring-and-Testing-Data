export function isValidPassword(password) {

  for( const char of password) {
    if (
      (char >= "A" && char <= "Z") ||
      (char >= "A" && char <= "Z") ||
      (char >= 0 && char <= 9)
    ) {
      return true;
    }
    return false;
  }
}
