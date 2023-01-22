// Exercise 1
let sentence = ["my","favorite","color","is","blue"];
console.log(sentence.join());


// Exercise 2
let str1 = "mix";
let str2 = "pod";

newstr1=str2.substring(0,2)+str1.substring(2,3);
newstr2=str1.substring(0,2)+str2.substring(2,3);
str3=`${newstr1} ${newstr2}`
console.log(str3);


// Exercise 3
let num1 = prompt('First Number?', 10);
num1=parseInt(num1);
let num2 = prompt('Second Number?', 10);
num2=parseInt(num2);
let num3 =num1+num2;
alert(`${num1} + ${num2} = ${num3}`);
