let xhr = new XMLHttpRequest();
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", makeRequest);


function makeRequest () {
    let searchTerm=document.getElementById("search");
    console.log(`hi ${searchTerm.value}`);
    let url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm.value}&rating=g&limit=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;
    xhr.open("GET", url); 
    //xhr.responseType = 'json';
    xhr.send();
  } 

  xhr.onload = function() {
    console.log(xhr);
    if (xhr.status !== 200) {
        console.log("error");
    } else {
        console.log(xhr.response);
        //const data = JSON.parse(xhr.response);
        //displayRobots(data);
    }

  };

  xhr.onerror = function() { 
    alert(`Network Error`);
  };

  xhr.onprogress = function(event) {
    if (event.lengthComputable) {
      alert(`Received ${event.loaded} of ${event.total} bytes`);
    } else {
      alert(`Received ${event.loaded} bytes`); // no Content-Length
    }
  };
 

