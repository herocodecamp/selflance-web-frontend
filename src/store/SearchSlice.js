import {  createSlice } from "@reduxjs/toolkit";

const initial_state = {
    search:'',
    subcategory:'',
    page:'',
    searchData:{}
 }

 const searchSlice = createSlice({
    name: 'search',
    initialState: initial_state,
    reducers:{
        setSearchString (state,action){
            state.search = action.payload.search

        },
        setSubCategory(state,action){
            state.subcategory = action.payload.subCategory
        },
        setPage(state,action){
            state.page = action.payload.page
        }

        
    }
})

export const searchActions = searchSlice.actions;

export default searchSlice.reducer;
