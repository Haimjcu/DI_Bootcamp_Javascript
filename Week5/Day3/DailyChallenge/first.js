const makeAllCaps = (words) => {
    return new Promise ((resolve, reject) => {
        let allWords=true
        for(word in words) {
            typeof words[word] !== "string" ? allWords=false : "";
        }
        allWords ? resolve(words) : reject("Not all strings");
    })
    .then((result) => {
        words.forEach( (element,i,arr) => {
            arr[i] = element.toUpperCase();
        });
        return words;
    })
    .then(result => sortWords(result))
    .catch(error => console.log(error))
}

const sortWords = (words) => {
    return new Promise ((resolve, reject) => {
        words.length>4 ? resolve(words) : reject("Not bigger than four")
    })
    .then((result) => {
        console.log(words.sort());
    })
    .catch(error => console.log(error))

}
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])

makeAllCaps(["apple", "pear", "banana"])

makeAllCaps([1, "pear", "banana"])
