import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchTodos = createAsyncThunk('fetchTodos' , async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return response.json()
})

const TodoTask = createSlice({
    name:"todo",
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builders) => {
        builders.addCase(fetchTodos.pending, (state,action) =>{
            state.isLoading = true
        })
        builders.addCase(fetchTodos.fulfilled , (state,action) =>{
            state.isLoading = false
            state.data = action.payload
        })
        builders.addCase(fetchTodos.rejected, (state,action) => {
            console.log("Error", action.payload);
            state.isError = true
        })
    }
})



export default TodoTask.reducer