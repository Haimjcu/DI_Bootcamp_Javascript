import React from 'react';
import {connect} from 'react-redux';
import { movieSelected } from '../actions/index';

const MovieList = (props) => {
    return (
        <div className="list-container">
        <h2>Movie List</h2>
        <ul>
        {props.movies.map(movie => (
          <div><span>{movie.title}</span><button onClick={() => props.movieSelected(movie)}>details</button></div>
        ))
        }
        </ul>

        </div>

    )

}

const mapStateToProps = (state) =>{
    return {
      movies: state.movies
    }
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      movieSelected: (movie) =>dispatch(movieSelected(movie))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(MovieList);