import { configureStore } from "@reduxjs/toolkit";
import { initialData } from "./initialState";
import { setBooksReducer } from "./slices/booksSlice";

export const store = configureStore({
  reducer: {
    bookList: setBooksReducer,
  },
  preloadedState: initialData,
});
