const form = document.forms[0];
const inputLat1=document.getElementById("lat1");
const inputLon1=document.getElementById("lon1");
const inputLat2=document.getElementById("lat2");
const inputLon2=document.getElementById("lon2");
const sunrise1=document.getElementById("sunrise1");
const sunrise2=document.getElementById("sunrise2");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    lat1=inputLat1.value;
    lon1=inputLon1.value;
    lat2=inputLat2.value;
    lon2=inputLon2.value;
    aFetch(lat1,lon1,lat2,lon2)
});

async function aFetch() {
    try {
        const city1= await fetch(`https://api.sunrise-sunset.org/json?${lat1}&lng=${lon1}`)
        .then((response) => response.json());
        const city2= await fetch(`https://api.sunrise-sunset.org/json?${lat2}&lng=${lon2}`)
        .then((response) => response.json());
        Promise.all([city1,city2]).then((values) => {
            sunrise1.innerHTML=values[0].results.sunrise;
            sunrise2.innerHTML=values[1].results.sunrise;
        })
    }
    catch (err ){
        sunrise1.innerHTML='ERROR';
    }
}
