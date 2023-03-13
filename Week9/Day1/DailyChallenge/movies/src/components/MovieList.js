import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { movieSelected } from '../actions/index';

const MovieList = (props) => {
  const movies = useSelector(state => state.movies);

  const dispatch = useDispatch();

    return (
        <div className="list-container">
        <h2>Movie List</h2>
        <ul>
        {movies.map(movie => (
          <div><span>{movie.title}</span><button onClick={() => dispatch(movieSelected(movie))}>details</button></div>
        ))
        }
        </ul>

        </div>

    )

}



export default MovieList;