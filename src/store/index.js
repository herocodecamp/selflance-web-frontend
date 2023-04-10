import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./AuthSlice";
import BecomeSellerSlice, { becomeSellerActions } from "./BecomeSellerSlice";
import sellerOfferReducer from "./GetSellerOfferSlice";

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

});

// persisted all reducers inside persistedReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

//store configure
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
<<<<<<< HEAD
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["becomeseller/detailsView1"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["payload.profileImage"],
        // Ignore these paths in the state
        // ignoredPaths: ['profileImage'],
      },
    }),
=======
      serializableCheck: false,
    })
>>>>>>> d249c2107b6e556a4f60a927ca834d37a1e3b05f
});

export default store;
