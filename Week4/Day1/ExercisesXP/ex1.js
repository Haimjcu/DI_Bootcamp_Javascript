// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// alert that says "inside the funcOne function 3".   if statement changes value of a

// #1.2 What will happen if the variable is declared 
// with const instead of let ? error message that you can't change a constant


//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree() // alert that says "inside the funcThree function 0"
funcTwo() // no alert,  a changed to 5
funcThree() // alert that says "inside the funcThree function 5"
// #2.2 What will happen if the variable is declared 
// with const instead of let ?  Answer- same for 1, 2 will give error, 3 will be same as 1



//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour() // undefined
funcFive() // alert that says "inside the funcThree function 5"

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()  // alert that says "inside the funcSix function test"
// #4.2 What will happen if the variable is declared 
// with const instead of let ? if inside funcSix then  alert that says "inside the funcSix function test"
//  if outside funcSix error, you can't change a constant

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console  alert tha says "in the if block 5" and 
//  then alert that says "outside of the if block 2"
// #5.2 What will happen if the variable is declared 
// with const instead of let ? if inside the block then the same. if outside the block then 
// first alert will give error