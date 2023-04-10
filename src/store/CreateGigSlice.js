import { createSlice } from "@reduxjs/toolkit";

const initial_state ={
  title: '',
  category: '',
  subCategory: '',
  tags: [],
  serviceDescription: '',
  packages: [],
  // gigComments: [],
  gigRequirement: [],
  gigFAQ: [],
  gigImages: [],
  videos: []
}

const createGigSlice = createSlice({
    name: 'creategig',
    initialState: initial_state,
    reducers:{
        gigView1(state,action){
            state.title = action.payload.title ? action.payload.title : ''
            state.category = action.payload.category ? action.payload.category : ''
            state.subCategory = action.payload.subCategory ? action.payload.subCategory : ''
            state.tags = action.payload.tags ? action.payload.tags : ''
        },
        gigView2(state,action){
            state.serviceDescription = action.payload.serviceDescription ? action.payload.serviceDescription : ''
            state.packages = action.payload.packages ? action.payload.packages :''
            state.gigFAQ = action.payload.gigFAQ ? action.payload.gigFAQ : ''
            state.gigRequirement = action.gigRequirement ? action.payload.gigRequirement :''
        },
        gigView3(state,action){
            console.log('from slice: ', action.payload.gigImages)
            state.gigImages =  state.gigImages ? action.payload.gigImages : []
        }

    }
});

export const createGigActions = createGigSlice.actions;

export default createGigSlice.reducer