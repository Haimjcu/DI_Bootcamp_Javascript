// Exercise 1
function isBlank(param) {
    if (param==="") {return true}
    else {return false}
}
console.log(isBlank(''));


// Exercise 2
function abbrevName(param) {
    let nameArray = param.split(" ");
    let abbrev = `${nameArray[0]} ${nameArray[1].charAt(0)}.`;
    return abbrev;
}
console.log(abbrevName("Robin Singh"));


// Exercise 3
function swapCase(param) {
    let params = param.split("");
    let letter='a';
    for (let i=0; i<param.length; i++) {
        letter=params[i];
        if (letter===" ") {continue;}
        else if (letter===letter.toUpperCase()) {
            params[i]=letter.toLowerCase();
        }
        else {
            params[i]=letter.toUpperCase(); 
        }
    }
    return params.join("");
}
swapCase("I am Testing");


// Exercise 4
function isOmnipresent(input, search) {
    let found=true;
    for (let i=0; i<input.length; i++) {
        for (let x=0; x<input[i].length; x++) {
            if(search===input[i][x]) { found=true; break;}
            else {found=false;}
        }
    if (found===false) {return false;}
    }
    return true;
}
isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)
isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)