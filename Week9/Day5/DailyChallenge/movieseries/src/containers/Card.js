import React from 'react';
import {Link} from "react-router-dom";

const Card = (props) => {
    const {imgSrc, title, id} = props;
    return (
        <div className="col-md-3 mb-5">
            <div className="card card-body bg-dark text-center h-100">
                <img className="w-100 mb-2" src={imgSrc} alt="Movie Cover" />
                <h5 className="text-light card-title">{title}</h5>
                <Link className="btn btn-primary" to={`/movie/${id}`}>Movie Details<i className="fas fa-chevron-right"></i></Link>
            </div>
        </div>
    )
}

export default Card;