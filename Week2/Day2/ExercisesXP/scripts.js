// Exercise 1
let x = 5;
let y = 2;
if (x>y) {
    console.log('x is bigger');
} else if (y>x) {
    console.log('y is bigger');
} else {
    console.log('x=y');
}


// Exercise 2
let newDog='Chihuahua';
console.log(newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
if (newDog=='Chihuahua') {
    console.log('I love Chihuahuas, it’s my favorite dog breed');
} else {
    console.log('I dont care, I prefer cats');
}


// Exercise 3
let inputNum=prompt('Give me a number');
if ((parseInt(inputNum)%2)==0) {
    console.log(`${inputNum} is an even number`);
} else {
    console.log(`${inputNum} is an odd number`)
}


// Exercise 4
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
switch(users.length) {
    case 0:
        console.log(`no one is online`);
        break;
    case 1:
        console.log(`${users[0]} is online`);
        break;
    case 2:
        console.log(`${users[0]} and ${users[1]} are online`);
        break;
    default:
        let additionalUsers=users.length-2;
        console.log(`${users[0]}, ${users[1]} and ${additionalUsers} more are online`);
        break;
}