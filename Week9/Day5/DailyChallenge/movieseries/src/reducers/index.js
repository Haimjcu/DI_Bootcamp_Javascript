const initialState = {
    text: '',
    movies: [],
    loading: false,
    movie: []
}

export const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case 'SEARCH_MOVIE':
            return { ...state, movies: action.payload, loading: false  }
        case 'FETCH_MOVIE':
            return { ...state, movie: action.payload }
        case 'LOADING':
            return { ...state, loading: true }
        default:
            return state;
    }
}