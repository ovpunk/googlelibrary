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
  },
});
export const { setBookList } = booksSlice.actions;
export const setBooksReducer = booksSlice.reducer;
