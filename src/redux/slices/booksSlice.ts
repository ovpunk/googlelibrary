import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialData } from "../initialState";
import { TBook } from "../../types";

export const booksSlice = createSlice({
  name: "bookList",
  initialState: initialData,
  reducers: {
    setBookList: (state, action: PayloadAction<TBook[]>) => {
      state.books = action.payload;
    },
    setFlag: (state, action: PayloadAction<boolean>) => {
      state.flag = action.payload;
    },
  },
});
export const { setBookList, setFlag } = booksSlice.actions;
export const setBooksReducer = booksSlice.reducer;
