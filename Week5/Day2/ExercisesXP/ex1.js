//ex1
const url= "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
let xhr = new XMLHttpRequest(); 
xhr.open("GET",url);
xhr.responseType = 'json';
xhr.send();
xhr.onreadystatechange = hilarious;

xhr.onload = function() {
   alert(`Loaded: ${xhr.status} ${xhr.response}`);
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

function hilarious() {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
        console.log(xhr.response);
      } else {
        console.log('There was a problem with the request.');
      }
    } else {
        console.log('Not ready yet');
    }
}