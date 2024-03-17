import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const balanceSlice = createSlice({
  name: "balance",
  initialState: {
    value: 0,
    a: 1,
    b: 2,
  },
  reducers: {
    deposit: (state, action) => {
      state.value += action.payload;
    },
    withdraw: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { deposit, withdraw } = balanceSlice.actions;

const persistConfig = {
  key: "balance",
  storage,
  whitelist: ["value"],
  blacklist: ["b"],
};
export const balanceReduser = persistReducer(
  persistConfig,
  balanceSlice.reducer
);
