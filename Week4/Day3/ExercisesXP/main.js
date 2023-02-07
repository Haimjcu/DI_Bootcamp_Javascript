//ex1
//------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// array of ['bread',"carrot", "potato", 'chicken', "apple", "orange"]

//------2------
const country = "USA";
console.log([...country]);
// array ['U','S','A']

//------Bonus------
let newArray = [...[,,]];
console.log(newArray);
// [undefined,undefined]


//ex2
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const welcomeStudents = users.map((obj) => "Hello "+obj.firstName);
console.log(welcomeStudents);

const fullStack = users.filter(obj => obj.role=="Full Stack Resident" );
console.log(fullStack);

const bonus = users.filter(obj => obj.role=="Full Stack Resident" ).map(obj => obj.firstName);
console.log(bonus);


//ex3
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const newEpic = epic.reduce((total, elem) => total+=elem);
console.log(newEpic)

//ex4
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

const passed = students.filter(obj => obj.isPassed===true);
console.log(passed);

const passedBonus = students.filter(obj => obj.isPassed===true).forEach(obj =>
    console.log(`Good job ${obj.name}, you passed the course in ${obj.course}`)
);
