import { createSelector } from "@reduxjs/toolkit";

export const propertiesSelector = createSelector(
  (store) => store.properties,
  (state) => {
    return state.properties;
  }
);
