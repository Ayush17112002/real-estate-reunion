import { createSlice } from "@reduxjs/toolkit";
import properties from "../../../dummy";
const propertiesSlice = createSlice({
  name: "properties",
  initialState: { properties: properties },
  reducers: {
    setProperties(state, action) {
      console.log(action.payload);
      state.properties = Object.assign({}, action.payload);
    },
  },
});
export const { setProperties } = propertiesSlice.actions;
export default propertiesSlice.reducer;
