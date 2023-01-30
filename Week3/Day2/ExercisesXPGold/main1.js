let genres=document.getElementById('genres');

console.log(genres.value);

// let newOption=document.createTextNode('<option value="classic">Classic</option>');
//genres.appendChild(newOption);

let option = document.createElement("option");
option.text = "Classic";
genres.add(option);
genres.options[2].selected=true;