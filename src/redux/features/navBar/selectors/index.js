import { createSelector } from "@reduxjs/toolkit";

export const navBar = createSelector(
  (store) => store.navBar,
  (state) => state.item
);
