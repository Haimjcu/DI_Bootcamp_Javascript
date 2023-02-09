function anagram (str1, str2) {
    arr1 = [...str1.replace(/\s/g,'').toLowerCase()];
    arr2 = [...str2.replace(/\s/g,'').toLowerCase()];
    if(arr1.length != arr2.length) {
        return false;
    }
    else {
        arr1.sort();
        arr2.sort();
        for(i=0; i<arr1.length; i++) {
            if(arr1[i] != arr2[i]) { return false; }
        }
    }
    return true;
}

anagram ("The Morse Code","Here come dots")