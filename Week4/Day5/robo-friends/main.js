const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];


   const robot =document.getElementsByClassName("robot")[0];
   const cards =document.getElementsByClassName("card");
   const names=document.getElementsByTagName("h2");
   const search =document.getElementById("search");

   search.addEventListener("keyup", searchRobots) 

   function searchRobots(event) {
        let searchWord=event.target.value.toLowerCase();
        for (nam in names) {
            if(names[nam].innerHTML!=undefined) {
                let hname=names[nam].innerHTML.toLowerCase();
                if (hname.includes(searchWord)) {
                    cards[nam].style.display="block"
                }
                else {cards[nam].style.display="none"}
            }
        } 
   }

   (function displayRobots () {

        robots.forEach( (entry) => {
            let card = document.createElement("div");
            let robotImg= document.createElement("img");
            let roboth2= document.createElement("h2");
            let robotP= document.createElement("p");
            robotImg.setAttribute("src",entry.image);
            roboth2.innerHTML=entry.name;
            robotP.innerHTML=entry.email;
            card.setAttribute("class","card");
            card.setAttribute("id",entry.id);
            card.appendChild(robotImg);
            card.appendChild(roboth2);
            card.appendChild(robotP);
            robot.appendChild(card);
        });
        
   })();