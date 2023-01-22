// Exercise 1
let food = 'donuts';
let meal = 'lunch';
console.log('I eat ' + food + ' at every ' + meal);


// Exercise 2
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;

// let myWatchedSeriesSentence = myWatchedSeries.toString();
let myWatchedSeriesSentence = myWatchedSeries[0] + ', ' + myWatchedSeries[1] + ', and ' + myWatchedSeries[2];
console.log(`I watched  ${myWatchedSeriesLength} series : ${myWatchedSeriesSentence}`);


// Exercise 3
let celsius = 21;
let fahrenheit = (celsius/5)*9;
console.log(fahrenheit.toFixed(1));


// Exercise 4
let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction:  55
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: 23
// Actual: 23

3. undefined
4. 75


// Exercise 5
typeof(15)
// Prediction: number
// Actual: number

typeof(5.5)
// Prediction: number
// Actual: number

typeof(NaN)
// Prediction: NaN   -  it is not a value
// Actual:  number

typeof("hello")
// Prediction: string
// Actual: string

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: boolean
// Actual: boolean

"hamburger" + "s"
// Prediction:  hamburgers
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: NaN  -  you can't do a math function on letters
// Actual: NaN

"1" + "3"
// Prediction: 13  -  they are 2 strings, so + means concatenate
// Actual: 13

"1" - "3"
// Prediction:  NaN  -  you can't do a math function on strings
// Actual: 2

"johnny" + 5
// Prediction: johnny5   -   treats both as strings
// Actual: johnny5

"johnny" - 5
// Prediction: NaN  -  you can't do a math function on letters
// Actual: NaN

99 * "hello"
// Prediction: NaN  -  you can't do a math function on letters
// Actual: NaN

1 != 1
// Prediction:  false   -  1 does equal 1
// Actual: false

1 == "1"
// Prediction: true  -   double equal sign doesn't consider type
// Actual: true

1 === "1"
// Prediction: false  -  triple equal sign considers type in the boolean
// Actual: false



// Exercise 6
5 + "34"
// Prediction:  39  -  math function treats string of numbers as a number
// Actual: 534

5 - "4"
// Prediction:  1  -  math function treats string of numbers as a number
// Actual: 1

10 % 5
// Prediction: 0   -  divides eventy
// Actual: 0

5 % 10
// Prediction:  0.5  -  remainder
// Actual:  5

"Java" + "Script"
// Prediction:  JavaScript  - simple concenate
// Actual: JavaScript

" " + " "
// Prediction: "  "
// Actual: '  '

" " + 0
// Prediction: " 0"
// Actual: ' 0'

true + true
// Prediction:  true  -  it is all true, boolean expression
// Actual: 2

true + false
// Prediction:  false -  if anything is false then everything is false
// Actual:  1

false + true
// Prediction:  false -  if anything is false then everything is false
// Actual: 1

false - true
// Prediction: false -  if anything is false then everything is false
// Actual:  -1 

// NOTE:  I learned from the above exercise that when using true or false in a math expresion it treats than as numbers, 1 or 0.

!true
// Prediction: false  - simple logic
// Actual:  false

3 - 4
// Prediction:  -1  - simple math
// Actual: -1

"Bob" - "bill"
// Prediction: NaN - can not do math on letters
// Actual: NaN
