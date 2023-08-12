import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import navBarReducer from "../features/navBar/slice";
import propertiesReducer from "../features/properties/slice";
import filterReducer from "../features/filter/slice";
const store = configureStore({
  reducer: {
    navBar: navBarReducer,
    properties: propertiesReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
