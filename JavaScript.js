// String methods
const str = "Mirry The Dog!";
console.log(str.length);               // String length
console.log(str.toUpperCase());        // Convert to uppercase
console.log(str.toLowerCase());        // Convert to lowercase
console.log(str.indexOf("Mirry"));     // Find index of substring
console.log(str.split(" "));          // Split string into an array

// Number methods
const num = 42.5678;
console.log(num.toFixed(2));           // Convert to string with 2 decimal places
console.log(num.toPrecision(3));       // Convert to string with 3 significant digits
console.log(Math.floor(num));          // Round down to the nearest integer
console.log(Math.ceil(num));           // Round up to the nearest integer
console.log(Math.random());            // Generate a random number between 0 and 1

// Array methods
const arr = [1, 2, 3, 4, 5];
const strArr = ["Mirry","The","Dog!"]; 
console.log(arr.length);               // Array length
console.log(arr.join("-"));            // Join array elements with a separator
console.log(arr.push(6));              // Add element to the end and return new length
console.log(strArr.pop());                // Remove and return the last element
console.log(strArr.reverse());            // Reverse the order of elements

// Date methods
const now = new Date();
console.log(now.toISOString());        // Convert to ISO string
console.log(now.getFullYear());        // Get the year
console.log(now.getMonth());           // Get the month (0-11)
console.log(now.getDate());            // Get the day of the month
console.log(now.getDay());             // Get the day of the week (0-6, Sun-Sat)

// Function methods
function greet(name) {
    console.log(`Hello, ${name}!`);
}
const greetLater = setTimeout(greet, 2000, "Marry"); // Call the function after 2 seconds
const greetInterval = setInterval(greet, 3000, "Alex"); // Call the function every 3 seconds

// Clear the intervals after some time
setTimeout(() => {
    clearInterval(greetLater);
    clearInterval(greetInterval);
}, 10000);
