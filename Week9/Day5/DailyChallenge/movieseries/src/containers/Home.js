import React from 'react';
import SearchBox from './SearchBox';
import MovieList from './MovieList';

const Home = () => {
    return (
        <div className='container'>
            <SearchBox />
            <MovieList />
        </div>
    )
}

export default Home;