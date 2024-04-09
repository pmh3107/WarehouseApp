import { createSlice } from "@reduxjs/toolkit";

type LoadingState = boolean;

const initialState: LoadingState = false;

const loadingSlice = createSlice({
  name: "loading",
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => action.payload,
  },
});

export const { setLoading } = loadingSlice.actions;

const loadingReducer = loadingSlice.reducer;

export default loadingReducer;