import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './slices/tasksReducer'
import usersReducer from './slices/usersReducer';
import fetchTasksMiddleware from '../middlewares/fetchTasksMiddleware'

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        users: usersReducer
    },
    middleware: (getDefaultMiddlewear) => getDefaultMiddlewear().concat(fetchTasksMiddleware),
});

export default store;