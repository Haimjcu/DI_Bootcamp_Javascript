const fs = require('fs');

fs.readFile('RightLeft.txt','utf-8', (err,data) => {
    err ? console.error(err)
    : doCalc(data);
});

const doCalc = (data) => {
    let dataArr = [...data];
    let finalPosition = 0;
    let negativePosition =0;
    let counter =0;
    for (s of dataArr) {
        s === '>' ? finalPosition++ : finalPosition--;
        counter++;
        finalPosition < 0 && negativePosition==0 ? negativePosition=counter : "";
    }
    let direction = finalPosition>=0 ? 'right' : 'left';
    console.log(`${finalPosition} steps to ${direction}`);
    console.log(`Fist negative is ${negativePosition} steps`);
}