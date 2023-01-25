let words = prompt('Enter some words separated by commans');
let wordsArray = words.split(",");
let longestWord=0;
for (let i=0; i<wordsArray.length; i++) {
    wordsArray[i]=wordsArray[i].trim();
    if (wordsArray[i].length>longestWord) {
        longestWord=wordsArray[i].length;
    }
}
let frameSize=4+parseInt(longestWord);
let spaces=0;

console.log("*".repeat(frameSize));
for (let i=0; i<wordsArray.length; i++) {
    spaces=longestWord-wordsArray[i].length;
    console.log(`* ${wordsArray[i]} ${" ".repeat(spaces)}*`);
}
console.log("*".repeat(frameSize));
