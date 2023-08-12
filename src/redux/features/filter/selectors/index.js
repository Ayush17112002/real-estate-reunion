import { createSelector } from "@reduxjs/toolkit";

export const filterSelector = createSelector(
  (store) => store.filter,
  (state) => state
);
