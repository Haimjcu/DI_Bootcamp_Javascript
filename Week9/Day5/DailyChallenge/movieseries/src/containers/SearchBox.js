import React from 'react';
import {fetchMovies } from '../actions/index';
import { useDispatch } from 'react-redux';

const SearchBox = () => {

    const dispatch=useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(fetchMovies(e.target.searchText.value));
  }

    return (
        <div className="jumbotron jumbotron-fluid mt-5 text-center" onSubmit={handleSubmit}>
            <div className="container">
                <h1 className="display-4 mb-3"><i className="fa fa-search"></i> Search for a movie ,TV series ..</h1>
                <form id="searchForm">
                    <input type="text" className="form-control" name="searchText" placeholder="Search Movies, TV Series ..." />
                    <button type="submit" className="btn btn-primary btn-bg mt-3">Search</button>
                </form>
            </div>
        </div>
    )
}

export default SearchBox;