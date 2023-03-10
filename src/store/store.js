import { configureStore } from "@reduxjs/toolkit";
import TodoTask from "../Slice/Mytodo";
 

export const store = configureStore({
    reducer:{
        todo: TodoTask
    }
})