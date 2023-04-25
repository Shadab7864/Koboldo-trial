import { createSlice } from "@reduxjs/toolkit";



// Creating slice
export const slice = createSlice({

    name: "dataStore", // Name of Slice

    // Declaring all the variables and storing
    initialState: {
        data: "",
        toggleDialog: false,
        categoryName: "",
        description: "",
        path: "",


    },
    // All the action will be written within the reducers
    reducers: {

        openDialog(state, action) {
            state.toggleDialog = ((state.toggleDialog === false) ? true : false)
        },
        closeDialog(state, action) {
            state.toggleDialog = ((state.toggleDialog === true) ? false : true)
        },
        addCategory(state, action) {
            
            state.categoryName=action.payload.categoryName
            state.description=action.payload.description
            state.path=action.payload.path
            state.toggleDialog = false
        },

    }


})

export const { openDialog, closeDialog, addCategory } = slice.actions
export default slice.reducer;