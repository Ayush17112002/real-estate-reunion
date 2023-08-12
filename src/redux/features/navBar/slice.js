import { createSlice } from "@reduxjs/toolkit";

const allowedItems = [
  "home",
  "rent",
  "buy",
  "sell",
  "manage-property",
  "resources",
  "login",
  "signup",
];
const initialState = {
  item: "home",
};
const navBarSlice = createSlice({
  name: "navBar",
  initialState,
  reducers: {
    selectNavBarItem(state, action) {
      if (allowedItems.includes(action)) {
        state.item = action;
      }
    },
  },
});
export default navBarSlice.reducer;
export const { selectNavBarItem } = navBarSlice.actions;
