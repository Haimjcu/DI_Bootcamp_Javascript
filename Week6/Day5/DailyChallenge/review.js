1. nums[1]

2. an empty array

3. [4,5,6,1,2,3,7,8,9]

4. Real Madrid

5. {
    france : "Paris Saint-Germain",
    spain : "Atlético Madrid",
    bestTeam: "France national football team"
}

6. it is an undeclared function
need to assign it to a constant and then invoke the constant,  x(a,b)

7. no let and const have local scope,  var would have global scope

8. yes, we can pass functions as arguments
Hello Javascript!

9. sum = (num1=10, num2) =>{ num1 + num2}
num1=10  set num1 to 10 if no value passed in, ie default value

10. console.log(`${foo()()}`)
this is an example of closures.  it passes the second parameter as the input to the inside function

11. click

12. yes

13. index.html

14. 
const marks = [67, 60, 89, 90, 67, 42];
let counter=0;
for (i=0; i<marks.length; i++) {
counter+=marks[i];
}
console.log(counter);

const marks = [67, 60, 89, 90, 67, 42];
let counter=0;
for (let mark of marks) {
counter+=mark;
}
console.log(counter);

15. false,  because 42 is < 50

16. [50,88]

17. 
const input = [ 1, 2, 3, 4, 5 ];
input.map( (n,i,arr) => arr[i]=n*n);
console.log(input);

18. 
const secondInput = [ 1, -4, 12, 0, -3, 29, -150];
const total= secondInput.filter( n=> n>0).reduce((newSum, n) => newSum+n);
console.log(total);

19. 
const input = 'George Raymond Richard Martin';
let initials ="";
input.split(" ").map( (x) => initials+=x.substring(0,1))
console.log(initials)

20. by reference, that is why changing the copy changed the crossOriginIsolated

21. create a deep copy and pass that the function
const nshirt= {...tshirt};
changeTshirt(nshirt)

22. 
const football = {
    type: "sport",
    clubs: {
      france : "Paris Saint-Germain",
      spain : "Atlético Madrid",
    }
  }  

  const {type, clubs} = football;
  console.log(clubs.france);
  console.log(clubs.spain);

  23.
  function retrieveSports (football){
    const {type, clubs:{france: franceTeam,spain: spainTeam}} = football;
    const sentence = `My favorite football teams are ${franceTeam} and ${spainTeam}`;
    console.log(sentence);
 }

 const football = {
     type: "sport",
     clubs: {
       france : "Paris Saint-Germain",
       spain : "Atlético Madrid",
     }
   }  

 retrieveSports(football)

 24. Chocolate Cake is for $10

 25. SUCCESS!  -  promise = resolved

 26. OK

 27. done!
 it waits 1 second for the promise to resolve, because of the line that says await for the promise to finish before continuig to execute ConvolverNode

 28. index28.html

 29. index29.html




