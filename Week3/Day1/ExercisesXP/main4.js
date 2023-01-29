const allBooks = [
    {
        title: "Harry Potter",
        author: "JK Rolling",
        image: "images/harry.jpg",
        alreadyRead: 0
    },
    {
        title: "Lord of the flies",
        author: "William Golding",
        image: "images/flies.jpg",
        alreadyRead: 1
    }
]

let listBooks=document.getElementsByClassName("listBooks")[0];
let newTable=document.createElement("table");
let newTrHead=document.createElement("tr");
let newTh=document.createElement("th");
let newTd=document.createElement("td");
let newImg=document.createElement("img");
let newTrDetails=document.createElement("tr");
let headTitle=document.createTextNode("Title");
let headAuthor=document.createTextNode("Author");
let headImage=document.createTextNode("Image");

newTh.appendChild(headTitle);
newTrHead.appendChild(newTh);
newTh=document.createElement("th");
newTh.appendChild(headAuthor);
newTrHead.appendChild(newTh);
newTh=document.createElement("th");
newTh.appendChild(headImage);
newTrHead.appendChild(newTh);
newTable.appendChild(newTrHead);
listBooks.appendChild(newTable);


for (let i=0; i < allBooks.length; i++) {
    let book=allBooks[i];
    newTrDetails=document.createElement("tr");
    newTd=document.createElement("td");
    book.alreadyRead ? newTd.style.color="red" : "";
    newTd.appendChild(document.createTextNode(book.title));
    newTrDetails.appendChild(newTd);
    newTd=document.createElement("td");
    book.alreadyRead ? newTd.style.color="red" : "";
    newTd.appendChild(document.createTextNode(book.author));
    newTrDetails.appendChild(newTd);

    newTd=document.createElement("td");
    newImg=document.createElement("img");
    newImg.src=book.image;
    newImg.style.width="100px"
    newTd.appendChild(newImg);
    newTrDetails.appendChild(newTd);

    newTable.appendChild(newTrDetails);
    listBooks.appendChild(newTable);

    
    
}