let form = document.forms[0];

form.addEventListener("submit", formSubmit);

function formSubmit(e) {
    let noun = document.getElementById("noun").value;
    let adjective = document.getElementById("adjective").value;
    let person = document.getElementById("person").value;
    let verb = document.getElementById("verb").value;
    let place = document.getElementById("place").value;
    if(noun=="" || adjective=="" || person=="" || verb=="" || place=="") {
        alert("Please fill in all boxes");
    }
    else {
        console.log('sdfsdf');
        let newStory=`${person} ${verb} the ${adjective} ${noun} to the ${place}`;
        document.getElementById("story").innerText=newStory;
        console.log(newStory);
    }
    e.preventDefault();
}
