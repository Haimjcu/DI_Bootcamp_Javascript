let form = document.forms[0];

form.addEventListener("submit", formSubmit);

function formSubmit(e) {
    let radius = document.getElementById("radius").value;
    radius = parseFloat(radius);
    if(radius!='' && !isNaN(radius)) {
        let volume=(4/3) * Math.PI * Math.pow(radius, 3);
        volume=volume.toFixed(2);
        document.getElementById("volume").value=volume;  
    }
    e.preventDefault();
}
