import React from 'react';

const Example3 = () => {
    let arr = {
        "SocialMedias": [
        
          "https://github.com/",
          "https://www.linkedin.com/",
          "https://www.facebook.com/"
        ],
        
        "Experiences": [
            {
              "companyName": "Demo1 Technologies",
              "logo": "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
              "url": "https://www.google.com/",
              "roles": [
                {
                  "title": "Full Stack Developer",
                  "description": "Built and updated various Chrome Extensions.",
                  "startDate": "2017-01-01",
                  "endDate": "2017-05-01",
                  "location": "New York, USA"
                }
              ]
            },
            {
              "companyName": "Demo2 Technologies",
              "logo": "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
              "url": "https://www.google.com/",
              "roles": [
                {
                  "title": "UI Designer",
                  "description": "Design user-fridendly web page",
                  "startDate": "2016-05-01",
                  "endDate": "2016-09-01",
                  "location": "Beijing, China"
                }
              ]
            }
          ],
        
          "Skills": [
            {
              "Area": "Programming Language",
              "SkillSet": [
                {
                  "Name": "Java",
                  "Hot": true
                },
                {
                  "Name": "C#",
                  "Hot": false
                },
                {
                  "Name": "Python",
                  "Hot": false
                }
              ]
            },
            {
              "Area": "Web-Based Application Development",
              "SkillSet": [
                {
                  "Name": "JavaScript (ES5, ES6)",
                  "Hot": true
                },
                {
                  "Name": "TypeScript",
                  "Hot": false
                },
                {
                  "Name": "HTML5",
                  "Hot": true
                },
                {
                  "Name": "CSS (SCSS/SASS)",
                  "Hot": true
                },
                {
                  "Name": "React",
                  "Hot": true
                }
              ]
            }      
          ]
        
        }
const html = arr.Experiences.map(item => (
  <div>
        <img src={item.logo}></img>
        <h3>{item.companyName}</h3>
        <p><strong>{item.roles[0].title}</strong></p>
        <p>{item.roles[0].location}</p>
        <p>{item.roles[0].description}</p>
  </div>

   ))
    return (
      <>
            {html}
      </>

    )

}

export default Example3;