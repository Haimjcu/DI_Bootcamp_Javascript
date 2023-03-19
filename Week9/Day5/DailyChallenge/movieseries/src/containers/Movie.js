import {React, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link, useParams} from "react-router-dom";
import {getMovie } from '../actions/index';



const Movie = () => {
    const dispatch=useDispatch();
    let params = useParams();

    useEffect (()=>{
        dispatch(getMovie(params.movie_id));
    }, []);

    const {Poster,Title, Genre, Released, Rated, imdbRating, Director, Writer, Actors, imdbID } = useSelector(state => state.movie);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 card card-body">
                    <img src={Poster} className="thumbnail" alt="Poster" />
                </div>

                <div className="col-md-8">
                    <h2 className="mb-4">{Title}</h2>
                    <ul className="list-group">
                        <li className="list-group-item"><strong>Genre:</strong> {Genre}</li>
                        <li className="list-group-item"><strong>Released:</strong> {Released}</li>
                        <li className="list-group-item"><strong>Rated:</strong> {Rated}</li>
                        <li className="list-group-item"><strong>IMDB Rating:</strong> {imdbRating}</li>
                        <li className="list-group-item"><strong>Director:</strong> {Director}</li>
                        <li className="list-group-item"><strong>Writer:</strong> {Writer}</li>
                        <li className="list-group-item"><strong>Actors:</strong> {Actors}</li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="card card-body bg-dark my-5 text-light">
                    <div className="col-md-12">
                        <h3>About </h3>
                        When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.
                        <hr />
                        <a href={`https://www.imdb.com/title/${imdbID}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on IMDB</a>
                        <Link className="btn btn-default text-light" to="/">Go Back To Search</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Movie;