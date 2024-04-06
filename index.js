// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  let arrLength = numbers.length;
  return arrLength;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];    
  }

  return total;

}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) { 
  let mean;
  
  if(numbers.length > 0){
    mean = getSum(numbers)/numbers.length;
  }
  return mean;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) { 
  
  let minNum;

  if(numbers.length > 0) {
    minNum = numbers[0];
  }

  for(let i = 1; i < numbers.length; i++){
    if (minNum > numbers[i]){
      minNum = numbers[i];
    }    
  }

  return minNum;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  let maxNum;

  if(numbers.length > 0) {
    maxNum = numbers[0];
  }

  for(let i = 1; i < numbers.length; i++){
    if (maxNum < numbers[i]){
      maxNum = numbers[i];
    }    
  }

  return maxNum;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  let maxNum = getMax(numbers);
  let minNum = getMin(numbers);
  return maxNum - minNum;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  let evenArr = [];
 
  for(let i = 0; i < numbers.length; i++){
    if ((numbers[i] % 2) == 0){
      evenArr.push(numbers[i]);
    }    
  } 

  return evenArr;

}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  let oddArr = [];
 
  for(let i = 0; i < numbers.length; i++){
    if ((numbers[i] % 2) == 1){
      oddArr.push(numbers[i]);
    }    
  } 

  return oddArr;
}
