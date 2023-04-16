import {  createSlice } from "@reduxjs/toolkit";

const initial_state = {
    search:null,
    subcategory:null,
    page:null,
    searchData:null
 }

 const searchSlice = createSlice({
    name: 'search',
    initialState: initial_state,
    reducers:{
        setSearchString (state,action){
            state.search =  action.payload.search ?  action.payload.search :null

        },
        setSubCategory(state,action){
            state.subcategory = action.payload.subCategory ? action.payload.subCategory : null
        },
        setPage(state,action){
            state.page = action.payload.page ? action.payload.page : null
        }

        
    }
})

export const searchActions = searchSlice.actions;

export default searchSlice.reducer;
