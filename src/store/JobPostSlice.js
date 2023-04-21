import {  createSlice } from "@reduxjs/toolkit";

const initial_state = {
   jobForm: {},
   userJobPosts: null
}

const jobPostSlice = createSlice({
    name: 'jobpost',
    initialState: initial_state,
    reducers:{
        // from applying the job ssection/creating new job
        jobData (state,action){
            state.jobForm = action.payload.values

        },

        // getting jobpost data of a user
        userJobPostData (state,action){
            state.userJobPosts = action.payload.jobData
        },
        logout(state,action)
            {
                state.jobForm = {}
                state.userJobPosts = null
            }
        
    }
})

export const jobPostActions = jobPostSlice.actions;

export default jobPostSlice.reducer;

