import React from 'react';

const PostList = () => {
    let arr = [ 
        {
            "id": 1,
            "title": "Hello World",
            "content": "Try Reactjs is awesome. Can't wait to learn more",
            "date": "12-04-2017",
            "slug": "hello-world"
        },
        {
            "id": 2,
            "title": "Setup React",
            "content": "Setting up react is easy. Learn more about it!",
            "date": "1-28-2018",
            "slug": "setup-react"
        }
    ]
const html = arr.map(item => (
    <>
    <h2>{item.title}</h2>
    <p>{item.content}</p>
    </>
   ))
    return (
        <>
        <h1>This is a title</h1>
        {html}
        </>   
    )

}

export default PostList;