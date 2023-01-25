// Exercise 1
function infoAboutMe () {
    console.log('I like to hike in nature');
}
infoAboutMe();

function infoAboutPerson (personName, personAge, personFavoriteColor) {
    console.log(`${personName} is ${personAge} years old, your favorite color is ${personFavoriteColor}`);
}
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

// Exercise 2
function calculateTip() {
    let tip=0;
    let bill=0;
    bill=parseInt(prompt('Amount of bill'));
    if (bill<50) {tip=(bill*.20).toFixed(2);}
        else if (bill<200) {tip=(bill*.15).toFixed(2);}
        else if (bill>200) {tip=(bill*.10).toFixed(2);}
    total=(bill+parseFloat(tip)).toFixed(2);
    console.log(total);
}
calculateTip()


// Exercise 3
function isDivisible(param) {
    let total=0;
    for (let i=0; i<501; i++) {
        if(i%param==0) {
            console.log(i);
            total+=i;
        }
    }
    console.log(total);
}
isDivisible(23);
isDivisible(3);
isDivisible(45);


// Exercise 4
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}
const shoppingList = ["banana","orange","apple"];

function myBill() {
    for (let i=0; i<shoppingList.length; i++) {
        if (shoppingList[i] in stock && stock[shoppingList[i]]>0) {
            console.log(`${shoppingList[i]} price is ${prices[shoppingList[i]]}`);
            stock[shoppingList[i]]-=1;
            console.log(`stock is now ${stock[shoppingList[i]]}`)
        }
        else if (shoppingList[i] in stock) {
            console.log(`${shoppingList[i]} is out of stock`);
        }
    }
}
myBill()


// Exercise 5
function changeEnough(itemPrice, amountOfChange) {
    let total = amountOfChange[0]*0.25 +
        parseFloat(amountOfChange[1]*0.1) +
        parseFloat(amountOfChange[2]*0.05) +
        parseFloat(amountOfChange[3]*0.01)
    if (total>itemPrice) {return true;}
    else { return false;}
}
changeEnough(14.11, [2,100,0,0]);
changeEnough(0.75, [0,0,20,5]);


// Exercise 6
function hotelCost() {
    let nights=0;
    do {
    nights=parseInt(prompt('How many nights?'));
    } while (isNaN(nights))
    return (nights*140);
}


function planeRideCost() {
    let destination="";
    do {
        destination=prompt('Where are you going?').toLocaleLowerCase();
        } while (destination=="" || /\d/.test(destination)===true)
    if (destination=="london") {return 183;}
    else if (destination=="paris") {return 183;}
    else {return 300;}
}


function rentalCarCost() {
    let days=0;
    do {
    days=parseInt(prompt('How many days?'));
    } while (isNaN(days))
    if (days>10) {return (days*40)*0.95}
    else {return (days*40)}
}


function totalVacationCost() {
    let hotel = hotelCost();
    let plane = planeRideCost();
    let car = rentalCarCost();
    return (parseFloat(hotel) + parseFloat(plane) + parseFloat(car))
}
totalVacationCost()

//bonus
function hotelCost(nights) {
    return (nights*140);
}


function planeRideCost(destination) {
    if (destination=="london") {return 183;}
    else if (destination=="paris") {return 183;}
    else {return 300;}
}


function rentalCarCost(days) {
    if (days>10) {return (days*40)*0.95}
    else {return (days*40)}
}


function totalVacationCost() {

    let nights=0;
    do {
    nights=parseInt(prompt('How many nights?'));
    } while (isNaN(nights))
    let hotel = hotelCost(nights);

    let destination="";
    do {
        destination=prompt('Where are you going?').toLocaleLowerCase();
        } while (destination=="" || /\d/.test(destination)===true)
    let plane = planeRideCost(destination);

    let days=0;
    do {
    days=parseInt(prompt('How many days?'));
    } while (isNaN(days))
    let car = rentalCarCost(days);
    return (parseFloat(hotel) + parseFloat(plane) + parseFloat(car))
}
totalVacationCost()
