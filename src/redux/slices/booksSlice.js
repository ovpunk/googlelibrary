import { createSlice } from "@reduxjs/toolkit";
import { initialData } from "../initialState/";

export const booksSlice = createSlice({
  name: "bookList",
  initialState: initialData,
  reducers: {
    setBookList: (state, action) => {
      state.books = action.payload;
    },
  },
});
export const { setBookList } = booksSlice.actions;
export const setBooksReducer = booksSlice.reducer;
