const mergeWords = (string) => (nextString) => nextString === undefined ? string : mergeWords(string + ' ' + nextString);
mergeWords('There')('is')('no')('spoon.')();


function mergeWords(string) {
 return function(nextString) {
   if (nextString === undefined) {
     return string;
   } else {
     return mergeWords(string + ' ' + nextString);
   }
 }
}