// greeting.js - A simple module that exports a greeting function

/**
 * Greets a person by name
 * @param {string} name - The name of the person to greet
 * @returns {string} - A personalized greeting message
 */
function greet(name) {
    return `Hello, ${name}! Welcome to Node.js.`;
  }
  
  // Export the greet function
  module.exports = { greet };