// Exercise 1
5 >= 1
// Prediction: true - boolean  5 is greater than 1
// Actual: true

0 === 1
// Prediction: false   0 is not equal to 1
// Actual: false

4 <= 1
// Prediction:  false - 4 is not less than 1
// Actual: false

1 != 1
// Prediction: false    1 equals 1
// Actual: false

"A" > "B"
// Prediction:  false -  a is before b
// Actual: false

"B" < "C"
// Prediction:  true  - b is before c
// Actual: true

"a" > "A"
// Prediction: false - lower case are less than upper case
// Actual:  true

"b" < "A"
// Prediction: true - lower case are less than upper case
// Actual: false

// NOTE:  I learned that upper case are less than lower case

true === false
// Prediction:  false -  true does not equal false
// Actual:  false

true != true
// Prediction:  false -  true equals true
// Actual:  false


// Exercise 2
let numlist = prompt('Enter list of numbers seperated by commas');
numarray=numlist.split(',');
const sum = numarray.reduce((accumulator, value) => {
    return accumulator + parseInt(value);
  }, 0);
  
  console.log(sum);


  // Exercise 3
  let nemo=prompt('Enter a sentence containing the word "Nemo"');
  let nemopos=0;
  nemopos=nemo.indexOf('Nemo');
  if (nemopos > 0) {
        console.log(`I found Nemo at ${nemopos}`);
  } else {
        console.log(`I can't find Nemo`);
  }


   // Exercise 4
   let inputNum=prompt('Enter a number');
   inputNum=parseInt(inputNum);
   if (inputNum< 2) {
    output='boom'
   } else if (inputNum > 2) {
    output='b';
    for (let i = 0; i < inputNum; i++) {
        output+='o';
      }
    output+='m';
   } else {
    output='';
   }

   if (inputNum%2==0) {
    output+='!';
   }

   if (inputNum%5==0) {
    output=output.toUpperCase();
   }

   console.log(output);