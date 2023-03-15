import React from 'react';

const Photo = (props) => {
 const { src } = props;
  return (
      <li><img src={src} /></li>
  );
}

export default Photo;