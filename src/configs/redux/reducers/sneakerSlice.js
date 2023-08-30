import { createSlice } from "@reduxjs/toolkit";
import LostFound from "../../../resources/images/jordan_lost_found.webp";

const initialState = {
  listType: "OWNED",
  currency: "USD",
  conversionRate: null,
  isOpaque: false,
  sortType: null,
  sneakerPage: {
    URL: "https://www.goat.com/en-gb/sneakers/air-jordan-1-retro-high-og-dz5485-612",
    purchaseLocation: "Gift, Bangalore, July 2023",
    sneakerName: "Air Jordan 1 Retro High OG 'Chicago Lost & Found'",
    styleNumber: "DZ5485-612",
    dollarPrice: 180,
    purchaseOrder: 16,
    brand: "Jordan",
    image: LostFound,
    status: "OWNED",
    color: "Red",
  },
};

export const sneakerSlice = createSlice({
  name: "sneaker",
  initialState,
  reducers: {
    updateListType: (state, action) => {
      state.listType = action.payload;
    },
    updateCurrency: (state, action) => {
      state.currency = action.payload;
    },
    updateConversionRate: (state, action) => {
      state.conversionRate = action.payload;
    },
    updateIsOpaque: (state) => {
      state.isOpaque = !state.isOpaque;
    },
    updateSortType: (state, action) => {
      state.sortType = action.payload;
    },
    updateSneakerPage: (state, action) => {
      state.sneakerPage = action.payload;
    },
  },
});

export const {
  updateListType,
  updateCurrency,
  updateConversionRate,
  updateIsOpaque,
  updateSortType,
  updateSneakerPage,
} = sneakerSlice.actions;

export default sneakerSlice.reducer;
