const searchMovie = (text) => ({
    type: 'SEARCH_MOVIE',
    payload: text.Search
})

export const fetchMovies = (text) => {
        return dispatch => {
        dispatch(loading());

        fetch(`https://www.omdbapi.com/?apikey=cdc6e4b&s=${text}`)
        .then(res => res.json())
        .then(json => dispatch(searchMovie(json)) )
        .catch(err => console.log(err))
}
}

export const fetchMovie = (id) => ({
    type: 'FETCH_MOVIE',
    payload: id     
})

export const getMovie = (id) => {
    return dispatch => {
        fetch(`https://www.omdbapi.com/?apikey=cdc6e4b&i=${id}`)
        .then(res => res.json())
        .then(json => dispatch(fetchMovie(json)) )
        .catch(err => console.log(err))
}     
}

export const loading = () => ({
    type: 'LOADING'  
})
