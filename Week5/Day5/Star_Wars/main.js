const findBtn=document.getElementById("button");
const person=document.getElementById("person");
const height=document.getElementById("height");
const gender=document.getElementById("gender");
const birth=document.getElementById("birth");
const world=document.getElementById("world");




const findSomeone = () => {
    person.innerHTML='<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>';
    height.innerHTML="";
    gender.innerHTML="";
    birth.innerHTML="";
    world.innerHTML="";
    retrieveData(createRandomNumber())
}

const retrieveData = async (randomPerson) => {
    try {
       let data = fetch(`https://www.swapi.tech/api/people/${randomPerson}`)
        .then((response) => response.json())
        .then((response) => displayData(response))
        .catch((reject) => person.innerHTML="That person is not available");
    }
    catch (err) {
        person.innerHTML="That person is not available";
    }
}

const displayData = (data) =>{
    person.innerHTML=data.result.properties.name;
    height.innerHTML=`Height: ${data.result.properties.height}`;
    gender.innerHTML=` Gender: ${data.result.properties.gender}`;
    birth.innerHTML=`Birth Year: ${data.result.properties.birth_year}`;
    retrieveWorld(data.result.properties.homeworld);
    console.log(data);
}

const retrieveWorld = async (homeworld) => {
    try {
        let data = fetch(homeworld)
         .then((response) => response.json())
         .then((response) => world.innerHTML=`Home World: ${response.result.properties.name}`);
     }
     catch (err) {
         world.innerHTML="That world is not available";
     }
}

const createRandomNumber = () => {
    return Math.floor(Math.random() * 82) + 1;
}

findBtn.addEventListener("click", findSomeone);