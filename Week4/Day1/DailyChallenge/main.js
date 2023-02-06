const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];
let userNames=[];

gameInfo.forEach((obj, i) => {
    userNames.push(obj["username"]+"!");
});
console.log(userNames);

let winners=[];
gameInfo.forEach((obj, i) => {
    parseInt(obj["score"])>5 ? winners.push(obj["username"]) : "";
});

console.log(winners);

let total=0;
gameInfo.forEach((obj, i) => {
  total+=parseInt(obj["score"]);
});
console.log(total);
