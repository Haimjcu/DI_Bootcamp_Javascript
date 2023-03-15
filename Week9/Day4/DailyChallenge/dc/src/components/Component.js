import React from 'react';

const Component = (props) => {
 const { icon, title, number } = props;
  return (
    <div style={{margin: "20px", padding: "10px 30px", backgroundColor: 'white'}}>
      <p><img src={icon} /> <h4 style={{display: "inline-block", marginLeft: "20px"}}>{title}</h4></p>
    <h1>{number}</h1>
    </div>
  );
}

export default Component;