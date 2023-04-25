import { configureStore } from "@reduxjs/toolkit";

// import all reducers
import addReducer from "./Component/slice"



const store = configureStore({

    // reducer declaration
    reducer:{
        dataStore:addReducer,  // Same as slice


    },

})
export default store;