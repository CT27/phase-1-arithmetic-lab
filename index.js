
// Write your code here
// Create a variable called multiply set to an equation that will multiply the variables num1 and num2; the result of the multiplication should be 62.
const num1 = 31;
const num2 = 2;
const multiply = num1 * num2;

// Create a variable called random that will generate a random integer greater than 0.
const random = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;

// Create a variable called mod set to an equation that will calculate the remainder of dividing variable num3 by num4; the remainder should be 4.
const num3 = 20;
const num4 = 8;
const mod = num3 % num4;

// Create a variable called max that finds the highest number in a set; the value returned should be 20.
const numbers = [5, 10, 15, 20, 8];
const max = Math.max(...numbers);

console.log("Multiply:", multiply); // Output: 62
console.log("Random:", random); // Output: (Random integer greater than 0)
console.log("Mod:", mod); // Output: 4
console.log("Max:", max); // Output: 20
