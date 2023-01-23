let sentence='The movie is not that bad, I like it';
let wordNot=sentence.indexOf('not');
let wordBad=sentence.indexOf('bad');

if (wordBad>wordNot && wordBad>0 && wordNot>0) {
    sentence=sentence.substring(0,wordNot) + 'good' + sentence.substring((wordBad+3),(sentence.length));
}

console.log(sentence);