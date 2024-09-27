import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import data from '../../data/tasks';

export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks', 
    async (_, thunkApi) => {
        try {
            var promise = new Promise((resolve) => {
                setTimeout(() => {
                    resolve(data);
                }, 3000);
            });
            return promise;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

const initialState = {
    tasks: [],
    loading: false
}

const tasksReducer = createSlice({
    name: "tasks",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.tasks = action.payload;
                state.loading = false;
            })
            .addCase(fetchTasks.rejected, (state) => {
                state.loading = false;
            });
    }
});

export default tasksReducer.reducer;