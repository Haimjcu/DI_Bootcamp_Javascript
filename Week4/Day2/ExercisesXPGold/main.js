// ex1
let landscape = function() {

 let result = "";

 const flat = (x) => {
   for(let count = 0; count<x; count++){
     result = result + "_";
   }
 }

 const mountain = (x) => {
   result = result + "/"
   for(let counter = 0; counter<x; counter++){
     result = result + "'"
   }
   result = result + "\\"
 }

 flat(4);
 mountain(4);
 flat(4)

 return result;
}

landscape()


//ex2
13

//ex3
31

//ex4
17

//ex5
16