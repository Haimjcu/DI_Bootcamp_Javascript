let xhr = new XMLHttpRequest();
const results = document.getElementsByClassName("results")[0];
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", makeRequest);
const deleteAllBtn = document.getElementById("deleteAll");
deleteAllBtn.addEventListener("click", onDeleteAllBtnClick);


function makeRequest (event) {
  event.preventDefault();
  //GET REQUEST
  let searchTerm=document.getElementById("search");
  let url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm.value}&rating=g&limit=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;
  xhr.open("GET", url) //open the request
  xhr.responseType = "json";
  xhr.send() //request is send
}

// event executed only after the server sent the data back
xhr.onload = function () {
  console.log(xhr);
  if (xhr.status !== 200) {
      console.log("error");
  } else {
      console.log(xhr.response);
      const data = xhr.response.data;
      displayGifs(data);
  }
}

xhr.onprogress = function (event) {
  // console.log("checking");
  // progressbar
  let percentComplete = parseInt((event.loaded / event.total) * 100);
  console.log("Upload: " + percentComplete + "% complete")
}

//if the request couldnt be made (no internet) or problem in the server side
xhr.onerror = function (){
  console.log("error on error");
}

function displayGifs(data) {
  let imgUrl=data[0].images.original.url;
  const gif = document.createElement("div");
  gif.setAttribute("id",data[0].id);
  gif.classList.add("gifs");
  const gifImg = document.createElement("img");
  gifImg.setAttribute("src",imgUrl);
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML="Delete";
  deleteBtn.addEventListener('click',onClickDelete);
  gif.appendChild(gifImg);
  gif.appendChild(deleteBtn);
  results.appendChild(gif);
}

function onClickDelete(evt) {
  let div;
  div = evt.target.parentElement;
  div.parentElement.removeChild(div);
}

function onDeleteAllBtnClick() {
  const divs = document.querySelectorAll('gifs');
  divs.forEach( elem => elem.parentElement.removeChild(elem));
}
 

