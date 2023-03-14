const logAction = (store) => (next) => (action) => {
    console.log(`caught in middleware `, store.getState().counter);
    next(action);
}

export default logAction;