export function getOrdinalNumber(num) {
  const lastDigit = num % 10;
  const lastTwoDigit = num % 100;

  if (lastDigit === 1 && lastTwoDigit !== 11) {
    return `${num}st`;
  }
  if (lastDigit === 2 && lastTwoDigit !== 12) {
    return `${num}nd`;
  }
  if (lastDigit === 3 && lastTwoDigit !== 13) {
    return `${num}rd`;
  }
  return `${num}th`;
}
