import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSellerOffer = createAsyncThunk(
  "sellerOffer/fetchSellerOffer",
  async (offerId) => {
    const response = await axios.get(
      `http://localhost:8000/api/v1/buyerOrderProcess/sellerOffer/${offerId}`
    );
    return response.data;
  }
);

export const sellerOfferSlice = createSlice({
  name: "sellerOffer",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSellerOffer.fulfilled, (state, action) => {
      state[action.payload.offerId] = action.payload;
    });
  },
});

export default sellerOfferSlice.reducer;
