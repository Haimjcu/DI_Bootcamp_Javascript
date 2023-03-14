export const setSearchFields = (text) => ({
        type: 'CHANGE_SEARCH_FIELD',
        payload: text     
})

const apiBegin = () => {
        return {
            type: "API_BEGIN",
        }
    }
    
const apiSuccess = (robots) => {
return {
        type: "API_SUCCESS",
        payload: robots
        }
}

const apiFailure = (err) => {
return {
        type: "API_FAILURE",
        payload: err
}
}

export const getRobots = () => {
        return dispatch => {
                dispatch(apiBegin());

                fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(json => dispatch(apiSuccess(json)) )
                .catch(err => dispatch(apiFailure(err)))
        }

}