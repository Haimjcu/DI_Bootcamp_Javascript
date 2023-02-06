let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    groceries.vegetables.forEach((elem) => {
        console.log(elem);   
    })
}

displayGroceries();

const cloneGroceries = () => {
    let user = client;
    client="Betty"; // will not change user
    let shopping=groceries;
    groceries.totalPrice="35$"; // will see same in shopping object, because they are ojbects with the same pointer
    groceries.other.payed=false; // will see in shopping object, becaue other is also an object
}

cloneGroceries();
