import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./AuthSlice";
import BecomeSellerSlice, { becomeSellerActions } from "./BecomeSellerSlice";
import sellerOfferReducer from "./GetSellerOfferSlice";
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
  sellerOffer: sellerOfferReducer,
  JobPost: JobPostSlice

});

// persisted all reducers inside persistedReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

//store configure
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["becomeseller/detailsView1"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["payload.profileImage"],
        // Ignore these paths in the state
        // ignoredPaths: ['profileImage'],
      },
    }),
});

export default store;
