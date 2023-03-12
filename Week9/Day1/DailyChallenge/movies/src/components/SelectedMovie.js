import React from 'react';
import {connect} from 'react-redux';

const SelectedMovie = (props) => {
    return (
      <div className="details-container">
        <h2>Movie</h2>
        <div className="properties">
          <p>{props.movie.title}</p>
          <p>{props.movie.releaseDate}</p>
          <p>{props.movie.rating}</p>
        </div>

      </div>

    )

}

const mapStateToProps = (state) =>{
    return {
      movie: state.selectedMovie
    }
  };

export default connect(mapStateToProps)(SelectedMovie);