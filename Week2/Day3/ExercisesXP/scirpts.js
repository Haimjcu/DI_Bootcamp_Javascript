// Exercise 1
//1
const people = ["Greg", "Mary", "Devon", "James"];
people.splice(0,1);

//2
people.splice(2,1,"Jason");

//3
people.push("Haim");

//4
console.log(people.indexOf("Mary"));

//5
let newPeople=people.slice(1,3);

//6
newPeople.indexOf("Foo");  // returns -1 because Foo is not in the array

//7
let last=newPeople[newPeople.length-1];
console.log(last);

//Loops
//1 
const people = ["Greg", "Mary", "Devon", "James"];
for (let i in people) {
    console.log(people[i]);
}

//2 
const people = ["Greg", "Mary", "Devon", "Jason","Haim"];
for (let i in people) {
    console.log(people[i]);
    if (people[i]=='Jason') {break;}
}


// Exercise 2
const colors=["blue","green","purple","orange","pink"];
for (let i in colors) {
    console.log(`My #${parseInt(i)+1} choice is ${colors[i]}`);
}


// Exercise 3
var inputNum=0;
do {
   inputNum=prompt('Enter a number >= 10');
}
while (inputNum < 10 || isNaN(inputNum));


// Exercise 4
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
//2
console.log(building["numberOfFloors"]);
//3
console.log(`${building["numberOfAptByFloor"]["firstFloor"]} aparments on first floor`);
console.log(`${building["numberOfAptByFloor"]["thirdFloor"]} aparments on third floor`);
//4
console.log(`${building["nameOfTenants"][1]} has ${building["numberOfRoomsAndRent"]["dan"][0]} rooms in his apartment`);
//5
if ( (building["numberOfRoomsAndRent"]["sarah"][1] + building["numberOfRoomsAndRent"]["david"][1]) > building["numberOfRoomsAndRent"]["dan"][1] ) {
    building["numberOfRoomsAndRent"]["dan"][1]=1200;
} 
console.log(building["numberOfRoomsAndRent"]["dan"][1]);


// Exercise 5
const family = {
    father : "Asaf",
    mother: "Dina",
    brother: "Yosef",
    sister: "Bracha"
}
// keys
console.log("keys");
for (let x in family) {
    console.log(x);
}

// values
console.log("values");
for (let x in family) {
    console.log(family[x]);
}


// Exercise 6
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
let sentence='';
for (let x in details) {
sentence+=x + " " + details[x] + " ";
}
console.log(sentence);


// Exercise 7
namesArray =[];
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
for (let n of names) {
    namesArray.push(n.substring(0,1));
}
namesArray.sort();
console.log(namesArray.join(""));