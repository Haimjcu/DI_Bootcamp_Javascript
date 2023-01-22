// Exercise 1
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
let newFruits=fruits.slice(1);
newFruits=newFruits.sort();
newFruits.push('Kiwi');
newFruits.shift();
newFruits=newFruits.reverse();

console.log(newFruits);


// Exercise 2
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
let level1=moreFruits[1];
let level2=level1[1].toString();
console.log(level2);

// OR

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
let level1=moreFruits[1][1].toString();
console.log(level1);