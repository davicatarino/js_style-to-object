'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString
    .split(';') // Split the string into individual declarations
    .map(style => style.trim()) // Trim whitespace from each declaration
    .filter(Boolean); // Remove any empty strings

  const result = {};

  for (const style of styles) {
    const [key, value] = style.split(':'); // Split each declaration into key and value
    if (key && value) {
      result[key.trim()] = value.trim(); // Assign the trimmed key-value pair to the result object
    }
  }

  return result;
}

module.exports = convertToObject;
