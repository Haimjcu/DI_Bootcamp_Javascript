export const setSearchField = (text) => ({
        type: 'CHANGE_SEARCH_FIELD',
        payload: text     
})
    
const apiSuccess = (pictures) => {
return {
        type: "API_SUCCESS",
        payload: pictures
        }
}

const apiFailure = (err) => {
return {
        type: "API_FAILURE",
        payload: err
}
}

export const getPictures = (category) => {
        return dispatch => {
                fetch(`http://localhost:3001/api/${category}`)
                .then(res => res.json())
                .then(json => dispatch(apiSuccess(json)) )
                .catch(err => dispatch(apiFailure(err)))
        }

}

export const setSearchFields = (text) => {
        return dispatch => {
                dispatch(setSearchField(text));
                dispatch(getPictures(text));
        }

}