function hasKey(key) {
  return Object.prototype.hasOwnProperty.call(sampleObject, key);
}

// Sample object provided
const sampleObject = {
  red: "#FF0000",
  green: "#00FF00",
  white: "#FFFFFF"
};

// Test cases
console.log(hasKey("red"));    // Output: true
console.log(hasKey("blue"));   // Output: false
console.log(hasKey("white"));  // Output: true
