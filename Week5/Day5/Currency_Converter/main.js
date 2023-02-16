convert = document.getElementById("convert");
const frcur=document.getElementById("frcur");
const tocur=document.getElementById("tocur");
const amount=document.getElementById("amount");
const total=document.getElementById("total");



const codes = async () => {
    try {
        let data = fetch(`https://v6.exchangerate-api.com/v6/6bcd3a6decde0f6df5511733/codes`)
         .then((response) => response.json())
         .then((response) => addOptions(response))
         .catch((reject) => total.innerHTML="Codes not available");
     }
     catch (err) {
         total.innerHTML="Error";
     } 
}

const addOptions = (data) => {
    let supported_codes = data.supported_codes;
    for (code in supported_codes) {
        let newOption = document.createElement("option");
        newOption.text=supported_codes[code][1];
        newOption.value=supported_codes[code][0];
        frcur.appendChild(newOption);
        let newOptionn = document.createElement("option");
        newOptionn.text=supported_codes[code][1];
        newOptionn.value=supported_codes[code][0];
        tocur.appendChild(newOptionn);
    }
}

const convertCurrency = () => {
    try {
        let data = fetch(`https://v6.exchangerate-api.com/v6/6bcd3a6decde0f6df5511733/pair/${frcur.value}/${tocur.value}/${amount.value}`)
         .then((response) => response.json())
         .then((response) => total.innerHTML=`Total: ${response.conversion_result}`)
         .catch((reject) => total.innerHTML="Codes not available");
     }
     catch (err) {
         person.innerHTML="Error";
     } 
}

codes();
convert.addEventListener("click", convertCurrency);