function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// -   index starts at 0 and increase by 1 each time in the loop. When a character match is found the index return and the function stops.
// b) What is the if statement used to check
// -   It checks whether the character at position index of str is exactly equal to char. If so it returns that position.
// c) Why is index++ being used?
// -   index++ checks the next character of str. Without index would stay at 0 and the loop would never stop.
// d) What is the condition index < str.length used for?
// -   To check the number of characters in str. Once index equals str.length and every characters is checked the loop stops
