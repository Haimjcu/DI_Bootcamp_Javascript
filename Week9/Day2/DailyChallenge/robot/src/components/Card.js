import React from 'react';

const Card = (props) => {
 const { name, email, id } = props;
  return (
    <div>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;