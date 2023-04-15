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

export const postMultiplePageData = createAsyncThunk(
  "sellerOffer/postMultiplePageData",
  async ({ page1Data, page2Data, page3Data, page4Data }) => {
    const response = await axios.post(
      `http://localhost:8000/api/v1/buyerOrderProcess/6416b330cc7ed41f89a9c8ba`,
      { ...page1Data, ...page2Data, ...page3Data, ...page4Data }
    );
    console.log(
      { ...page1Data, ...page2Data, ...page3Data, ...page4Data },
      "here response data"
    );
    return response.data;
  }
);

const initialState = {
  page1Data: {},
  page2Data: {},
  page3Data: {},
  page4Data: {},
};

export const sellerOfferSlice = createSlice({
  name: "sellerOffer",
  initialState,
  reducers: {
    setPage1Data: (state, action) => {
      state.page1Data = action.payload;
    },
    setPage2Data: (state, action) => {
      state.page2Data = action.payload;
    },
    setPage3Data: (state, action) => {
      state.page3Data = action.payload;
    },
    setPage4Data: (state, action) => {
      state.page4Data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSellerOffer.fulfilled, (state, action) => {
      state[action.payload.offerId] = action.payload;
    });

    builder.addCase(postMultiplePageData.fulfilled, (state, action) => {
      // handle successful response from server if needed
      console.log("post data state", { state, action });
    });
  },
});
export const { setPage1Data, setPage2Data, setPage3Data, setPage4Data } =
  sellerOfferSlice.actions;
export default sellerOfferSlice.reducer;
