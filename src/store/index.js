import { combineReducers, configureStore,  } from "@reduxjs/toolkit";


import { persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./AuthSlice";
import BecomeSellerSlice from "./BecomeSellerSlice";
import CreateGigSlice from "./CreateGigSlice";
import JobPostSlice from './JobPostSlice';

// persist config storage
const persistConfig = {
  key: "root",
  version: "1",
  storage,
};

// put all slice inside rootReducer 
// Property key write as like below
const rootReducer = combineReducers({
  Auth: authSlice,
  BecomeSeller: BecomeSellerSlice,
  CreateGig: CreateGigSlice,
  JobPost: JobPostSlice

});


// persisted all reducers inside persistedReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

//store configure
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export default store;