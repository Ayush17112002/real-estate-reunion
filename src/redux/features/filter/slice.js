import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "Anywhere",
  date: new Date(),
  lowestPrice: 500,
  highestPrice: 2500,
  type: "Houses",
};

const filter = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setDate(state, action) {
      state.date = action.payload;
    },
    setPrice(state, action) {
      const { lowestPrice, highestPrice } = action.payload;
      state.lowestPrice = lowestPrice;
      state.highestPrice = highestPrice;
    },
    setPropertyType(state, action) {
      state.type = action.payload;
    },
  },
});

export const { setLocation, setDate, setPrice, setPropertyType } =
  filter.actions;
export default filter.reducer;
