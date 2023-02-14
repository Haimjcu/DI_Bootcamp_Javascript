const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

  const toJs = () => {
    let morseObj = JSON.parse(morse);
    return new Promise ((resolve, reject) => {
       morseObj!=="" ? resolve(morseObj) : reject("Empty")
    })
    .then((result) => {
        toMorse(result);
    })
    .catch(error => console.log(error))
  } 

  const toMorse = (morseJS) => {
    let input = prompt('Enter a word or sentence'); 
    return new Promise ((resolve, reject) => {
        let allWords=true;
        let inputArr=[...input.toLowerCase()];;
        let morseTranslation=[];
        for(word in inputArr) {
            morseJS[inputArr[word]] ===undefined ? allWords=false : morseTranslation.push(morseJS[inputArr[word]]);
        }
        allWords ? resolve(morseTranslation) : reject(input);
     })
     .then((result) => {
        joinWords(result);
     })
     .catch(error => console.log(`the character "${error}" doesn't exist in the morse javascript object`))
  }

  const joinWords = (morseTranslation) => {
    console.log(morseTranslation.join("\n"));
  }

  toJs();
