//one loop
for (let i=1; i<7; i++) {
    switch (i) {
        case 1:
            console.log("*");
            continue;
        case 2:
            console.log("**");
            continue;
        case 3:
            console.log("***");
            continue;
        case 4:
            console.log("****");
            continue;
        case 5:
            console.log("*****");
            continue;
        case 6:
            console.log("******");
            continue;
    }
}


//nested loop
const asterik="*";
for (let i=1; i<7; i++) {
    for (let x=0; x<i; x++) {
        console.log(asterik);
    }
    console.log("\n");
}
