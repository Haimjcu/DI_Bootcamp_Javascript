import React from 'react';
require ('./memory.css');

const Card = (props) => {
    let {id, imageSrc, name, occupation, handleClick} = props;
    return (
        <div className="card" onClick={handleClick(id)} key={id}>
            <div className="img-container">
                <img alt={name} src={imageSrc} />
            </div>
            <div className="img-content">
                <ul>
                    <li><strong>Name: </strong>{name}</li>
                    <li><strong>Occupation: </strong>{occupation}</li>
                </ul>
            </div>
        </div>
    )
}

export default Card;