import {  createSlice } from "@reduxjs/toolkit";

const initial_state = {
data: {}

}

const userDataSlice = createSlice({
    name: 'becomeseller',
    initialState: initial_state,
    reducers:{
       getUserData(state,action)
       {
        
        state.data = action.payload.user
       }

    }
})

export const userDataActions = userDataSlice.actions;

export default userDataSlice.reducer;

