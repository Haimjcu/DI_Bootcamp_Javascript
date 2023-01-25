// Exercise 1
function countEven(param) {
    console.log(param);
    for (let i=0; i<=param; i++) {
        if(i%2==0) {console.log(`${i}`)}
    }
}
countEven(Math.floor(Math.random() * 100));


// Exercise 2
function capitalize(param) {
    let params = param.split("");
    let letter='a';
    for (let i=0; i<param.length; i++) {
        letter=params[i];
        if(i%2==0) {params[i]=letter.toUpperCase()}
        else {params[i]=letter.toLowerCase()}
    }
    let first = params.join("");

    params = param.split("");
    for (let i=0; i<param.length; i++) {
        letter=params[i];
        if(i%2==0) {params[i]=letter.toLowerCase()}
        else {params[i]=letter.toUpperCase()}
    }
    let second = params.join("");
    return [first,second];
}
capitalize("abcdef");


// Exercise 3
function isPalindrome (param) {
    params = param.split("");
    let halfSize=(param.length)/2;
    for (let i=0; i<halfSize; i++) {
    if(params[i]!=params[param.length-1-i]) {
        return false;
        }
    }
    return true;
}
let palindrome=prompt('Enter word');
isPalindrome (palindrome);


// Exercise 4
function biggestNumberInArray(arrayNumber) {
    let longestNumber=0;
    for (let i=0; i<arrayNumber.length; i++) {
        if (arrayNumber[i]>longestNumber) {
            longestNumber=arrayNumber[i];
        }
    }
    return longestNumber;
}
const array = [-1,0,3,100, 99, 2, 99] ;// should return 100 
const array2 = ['a', 3, 4, 2]; // should return 4 
const array3 = []; // should return 0
biggestNumberInArray(array);


// Exercise 5
function unique(param) {
    param.sort();
    let lastElement="";
    let newArray=[];
    for (let i=0; i<param.length; i++) {
        if(param[i]!==lastElement) {
            newArray.push(param[i]);
            lastElement=param[i];
        }
    }
    return newArray;
}
const list=[1,2,3,3,3,3,4,5];
console.log(unique(list));
