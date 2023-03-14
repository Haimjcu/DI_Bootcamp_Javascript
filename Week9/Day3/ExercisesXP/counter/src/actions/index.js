export const incrementCount = () => {
    return {
        type: 'INCREASE_COUNT'
    }
}

export const decreaseCount = () => {
    return {
        type: 'DECREASE_COUNT'
    }
}

export const incrementOdd = () => {
    return {
        type: 'INCREASE_ODD'
    }
}

export const incrementAsync = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(incrementCount())
        }, 1000);
    };
}