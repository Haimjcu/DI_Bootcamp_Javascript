//one loop
for (let i=1; i<7; i++) {
    console.log("*".repeat(i));
}


//nested loop
let asterik="";
for (let i=1; i<7; i++) {
    asterik="";
    for (let x=0; x<i; x++) {
        asterik+="*";
    }
    console.log(asterik);
}