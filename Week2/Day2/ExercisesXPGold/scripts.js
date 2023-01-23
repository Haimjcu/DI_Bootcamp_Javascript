// Exercise 1
let language=prompt('What language do you speak?').toLocaleLowerCase();
switch(language) {
    case 'french':
        console.log('Bonjour');
        break;
    case 'english':
        console.log('Hello');
        break;
    case 'hebrew':
        console.log('Shalom');
        break;
    default:
        console.log('01110011 01101111 01110010 01110010 01111001');
        break;
}


// Exercise 2
let grade=parseInt(prompt('What grade did you get?'));
if (grade>90) { console.log('A');}
else if (grade>80) { console.log('B');}
else if (grade>=70) { console.log('C');}
else { console.log('D');}


// Exercise 3
let verb=prompt('Enter a verb');
let verbLength=verb.length;
if (verbLength>=3 && (verb.substring(verbLength-3,verbLength)!='ing')) { console.log(`${verb}ing`);}
else if (verbLength>=3 && (verb.substring(verbLength-3,verbLength)=='ing')) { console.log(`${verb}ly`);}
else {console.log(`${verb}`)};

