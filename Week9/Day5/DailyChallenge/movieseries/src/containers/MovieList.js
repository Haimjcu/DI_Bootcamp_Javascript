import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';


const MovieList = () => {
    const movies = useSelector(state => state.movies)
    return (
        <div class="row">
                        {
              movies.map((movie, i) => {
                return (
                  <Card key={i} imgSrc={movie.Poster} title={movie.Title} id={movie.imdbID} />
                );
              })
            }
        </div>
    )
}

export default MovieList;