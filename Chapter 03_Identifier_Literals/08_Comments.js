// JavaScript Comment Options with Examples

// Single-line comment: Use // for comments on one line
let name = "John"; // This is a single-line comment

// Multi-line comment: Use /* */ for comments spanning multiple lines
/*
This is a multi-line comment.
It can span several lines.
Useful for longer explanations.
*/
let age = 25;

/**
 * JSDoc comment: Use /** */ for documentation comments
 * @param {string} userName - The name of the user
 * @returns {string} A greeting message
 */
function greetUser(userName) {
  return `Hello, ${userName}!`;
}

// Example usage
console.log(greetUser(name)); // Output: Hello, John!

/*
VS Code Shortcuts for Windows:
- Single-line comment: Ctrl + /
- Multi-line comment: Shift + Alt + A
- JSDoc comment: Type /** and press Enter above a function
*/
