const initialState = {
    counter: 0
}

export const reducer = (state=initialState, action={}) => {
    let newCount=0;
    switch (action.type) {
        case 'INCREASE_COUNT':
            newCount=state.counter + 1;
            return {...state, counter : newCount}
        case 'DECREASE_COUNT':
            newCount=state.counter - 1;
            return {...state, counter : newCount}
        default:
            return {...state}
    }
}