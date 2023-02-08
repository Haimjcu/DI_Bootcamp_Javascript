//ex1 
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)


//ex2
function displayStudentInfo(objUser){
    const{first, last} = objUser;
    console.log(`Your full name is ${first} ${last}`)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});


//ex3
const users = { user1: 18273, user2: 92833, user3: 90315 };
let newArray = Object.entries(users);
for (i=0; i< newArray.length; i++) {
    newArray[i][1]=newArray[i][1]*2
}
console.log(newArray);

//ex4
class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);
  // object


  //ex5
class Dog {
  constructor(name) {
    this.name = name;
  }
};
  // 3 extends class Dog
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
};


//ex6
// 1
[2] === [2]  // false
{} === {}  // false

//2
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number) //4
console.log(object3.number) //4
console.log(object4.number) //5

//3
class Animal {
    constructor(name,type,color) {
        this.name=name;
        this.type=type;
        this.color=color;
    }
}

class Mamal extends Animal {
    sound(param) {
        return `${param} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
}

const farmerCow = new Mamal("Lily","cow","brown and white");
farmerCow.sound("moo");