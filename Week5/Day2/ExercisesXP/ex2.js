//ex2
let xhr = new XMLHttpRequest();
xhr.open("GET","https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My",true);
xhr.responseType = 'json';
xhr.send();
xhr.onreadystatechange = sun;

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

function sun() {
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