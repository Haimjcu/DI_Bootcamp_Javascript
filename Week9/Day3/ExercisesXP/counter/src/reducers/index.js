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
        case 'INCREASE_ODD':
            state.counter%2==1 ? newCount=state.counter + 1 : newCount=state.counter;
            return {...state, counter : newCount}
        default:
            return {...state}
    }
}