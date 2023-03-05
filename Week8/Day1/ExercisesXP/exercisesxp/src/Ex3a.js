import React from "react";

const UserFavoriteColors = (props) => {
    return (
            props.animals.map(animal => (
                <li>{animal}</li>
            ))
    )

}

export default UserFavoriteColors