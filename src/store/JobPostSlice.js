import {  createSlice } from "@reduxjs/toolkit";

const initial_state = {
   jobForm: {}
}

const jobPostSlice = createSlice({
    name: 'jobpost',
    initialState: initial_state,
    reducers:{
        jobData (state,action){
            state.jobForm = action.payload.values

        }
        
    }
})

export const jobPostActions = jobPostSlice.actions;

export default jobPostSlice.reducer;

