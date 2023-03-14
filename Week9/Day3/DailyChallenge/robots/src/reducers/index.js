const initialState = {
    robots: [],
    searchField: '',
    loading: ''
}

export const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case 'CHANGE_SEARCH_FIELD':
            return { ...state, searchField: action.payload }
        case 'API_BEGIN':
          return { ...state, loading: 'Loading'}
        case 'API_SUCCESS':
        return { ...state, robots: action.payload }
        case 'API_FAILURE':
        return { ...state, loading: action.payload }
        default:
            return state;
    }
}