let startNum=parseInt(prompt('Enter a number to start counting down bottles'));
singit(startNum);

function singit(startNum) {
    let x=1;
    do {
        console.log(`${startNum} bottles of beer on the wall`);
        console.log(`${startNum} bottles of beer`);
        console.log(`Take ${x} down, pass ${itOrThem(x)} around`);
        startNum-=x;
        if(startNum>0) {
            console.log(`${startNum} bottles of beer on the wall`);            
        }
        else {
            console.log(`NO bottles of beer on the wall`);
        }
            x++;      

    } while (startNum>0)
}

function itOrThem (takeNum) {
    if(takeNum===1) {return 'it';}
    else {return 'them'; }
}