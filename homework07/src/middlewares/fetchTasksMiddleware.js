const fetchTasksMiddleware = (store) => (next) => (action) => {
    
    console.log(action.type, store.getState());

    return next(action);
}

export default fetchTasksMiddleware;