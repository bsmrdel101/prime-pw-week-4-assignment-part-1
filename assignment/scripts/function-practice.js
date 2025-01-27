console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return name;
}
// Remember to call the function to test
console.log('Hello ', helloName('Bennett'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log(addNumbers(1, 200));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNum, secondNum, thirdNum) {
  return firstNum * secondNum * thirdNum;
}
console.log(multiplyThree(4, 5, 2));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
let numbers = [1, 4, 8, 12, 24];
let empty = [];
let lastNum;

function getLast(array) {
  if (array.length === 0) {
    return undefined;
  } else {
    lastNum = array.length - 1;
    return array[lastNum];
  }
}
console.log('The last item is ', getLast(numbers));
console.log('This should be undefined: ', getLast(empty));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
console.log(find(8, numbers));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
let word = 'bannana';

function isFirstLetter(letter, string) {
  if (string.includes(letter)) {
    return true;
  } else {
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
// TODO: loop to add items

function sumAll(array) {
  let sum = 0;
  for (let x = 0; x < array.length; x++) {
    sum += array[x];
  }
  return sum;
}
console.log(sumAll(numbers));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let input = [1, -4, 8, -2, -1, 12, 6];
let sort = [];

function posArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > -1) {
      sort.push(array[i]);
    }
  }
  return sort;
}
console.log(posArray(input));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!


//Edabit.com: How much is true?
//PROBLEM: Create a function which returns the number of true values there are in an array.
let testArray = [false, true, true, false, true, true, false, true, false, true, false, true, false, true, false];

function countTrue(arr) {
	let total = 0; //Declares total and assigns it a value of 0.
	for (let i = 0; i < arr.length; i++) { //Will loop through the entire array.
		if (arr[i] === true) { //Detects each value in the array. If it's equal to true, then it adds 1 to total.
			total++;
		}
	}
	return total;
}
console.log(countTrue(testArray));
