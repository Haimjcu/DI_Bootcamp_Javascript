// Exercise 1
let birth1=1991;
let birth2=2017;
let today=2023;
let age1=today-birth1;
let age2=today-birth2;
let ageDiff=(age1-age2)/2;
let halfAge=birth2+((age1-age2)/2);
console.log(halfAge);

// Exercise 2
let zip=prompt('Enter zipcode');
if (zip.length==5 && !isNaN(zip)) {
    console.log('success');
} else {
    console.log('error');
}


let patt= /^[0-9]{5}$/;
let zip=prompt('Enter zipcode');
if (zip.match(patt)) {
    console.log('success');
} else {
    console.log('error');
}


// Exercise 3
let patt= /[aeiou]/g;
let word=prompt('Enter a word').toLocaleLowerCase();
let newWord=word.replace(patt,'');
console.log(newWord);
