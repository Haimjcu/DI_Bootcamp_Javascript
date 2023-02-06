// Part 1
/*
function makeJuice(size) {

    function addIngredients(first, second, third) {
        let sentence=`The client wants a ${size} juice, containing ${first}, ${second}, ${third}`;
        let output=document.getElementById("output");
        output.innerHTML=sentence;
    }
    addIngredients("mango","kiwi","pineapple");
}

makeJuice("32oz");
*/


// Part 2
function makeJuice(size) {
    let ingredients=[];

    function addIngredients(first, second, third) {
        ingredients.push(first);
        ingredients.push(second);
        ingredients.push(third);
    }

    function displayJuice() {
        let sentence=`The client wants a ${size} juice, containing `;
        ingredients.forEach((elem, i, arr) => {
            if(i==arr.length-1) { sentence+='and '+elem; }
            else {sentence+=elem+', ';}
            })
            let output=document.getElementById("output");
            output.innerHTML=sentence;
    }
    addIngredients("mango","kiwi","pineapple");
    addIngredients("apple","strawberry","coconut");
    displayJuice();
}

makeJuice("32oz");