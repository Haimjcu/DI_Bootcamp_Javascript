    async function aFetch() {
        const response= await fetch("https://www.swapi.tech/api/starships/9/");
        const json= await response.json();
        console.log(json);
    }

    aFetch();

     