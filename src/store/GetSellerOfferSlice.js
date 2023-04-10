import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSellerOffer = createAsyncThunk(
  'sellerOffer/fetchSellerOffer',
  async (offerId) => {
    const response = await axios.get(`/api/seller-offers/${offerId}`);
    return response.data;
  }
);

  export const sellerOfferSlice  = createSlice({
    name: 'sellerOffer',
    initialState: {
      data: {},
      status: '',
      error: null
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchSellerOffer.fulfilled, (state, action) => {
        state[action.payload.offerId] = action.payload;
      });
    },
  });

 export default sellerOfferSlice.reducer;
