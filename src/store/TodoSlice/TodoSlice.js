import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodos(state, action){
            return[
                {
                    id: new Date().getTime().toString(),
                    title: action.payload,
                    complete: false
                },
                ...state
            ]
        },

        checked(state,action){
            return[...state.map(el => el.complete === action.payload.complete && el.id === action.payload.id ?  {...el, complete: !el.complete} : el)]
        },
        remove(state, action){
            return[...state.filter(el => el.id !== action.payload)]
        }
    }
})


export const {addTodos, checked, remove} = todoSlice.actions

export default todoSlice.reducer