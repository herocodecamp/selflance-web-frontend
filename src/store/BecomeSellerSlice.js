import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initial_state = {
    firstname: '',
    lastname: '',
    location: '',
    about: '',
    occupation:'',
    jobDescription:'',
    profileImage: '',
    education: [],
    hourlyRate: '',
    skills: [],
    experience:[],
    onlineStatus: false,
    certificates:[],
    contactNumber: 0,
    sellerLanguage: '',
    languageLevel:''

}

const becomeSellerSlice = createSlice({
    name: 'becomeseller',
    initialState: initial_state,
    reducers:{
        detailsView1 (state,action){
            state.firstname = action.payload.firstname ? action.payload.firstname : ''
            state.lastname = action.payload.lastname ? action.payload.lastname : ''
            state.location = action.payload.location ? action.payload.location : ''
            state.jobDescription = action.payload.jobDescription ? action.payload.jobDescription : ''
            state.profileImage = action.payload.profileImage ? action.payload.profileImage : ''
            state.hourlyRate = action.payload.hourlyRate ? action.payload.hourlyRate : ''
            state.sellerLanguage = action.payload.sellerLanguage ? action.payload.sellerLanguage : ''
            state.languageLevel = action.payload.languageLevel ? action.payload.languageLevel : ''

        },
        detailsView2 (state,action){
            
            state.education = action.payload.education ? action.payload.education : []
            state.skills = action.payload.skills ? action.payload.skills : []
            state.experience = action.payload.experience ? action.payload.experience : []
            state.certificates = action.payload.certificate ? action.payload.certificate : []
            state.occupation = action.payload.occupation ? action.payload.occupation : ''

        },
        detailsView3 (state,action){
           
            state.contactNumber = action.payload.number ? action.payload.number : 0

        },

    }
})

export const becomeSellerActions = becomeSellerSlice.actions;

export default becomeSellerSlice.reducer;

