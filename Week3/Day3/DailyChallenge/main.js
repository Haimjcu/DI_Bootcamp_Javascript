let x = document.getElementById("letters");

x.onkeyup = function() {
   if(!validate(x.value)) {
        x.value=x.value.slice(0, x.value.length-1);;
   };
};

function validate(str) {
    return /^[A-Za-z\s]*$/.test(str);
  }
