const initialState = {
    counter: 0
  }

export const reducer = (state=initialState, action={}) => {
    let newCount=0;
    switch (action.type) {
        case 'AGE_UP':
            newCount=state.counter + 1;
            return {...state, counter : newCount}
        case 'AGE_DOWN':
            newCount=state.counter - 1;
            return {...state, counter : newCount}
        default:
            return {...state}
    }
}