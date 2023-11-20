import { configureStore } from "@reduxjs/toolkit";
import { setBooksReducer } from "./slices/booksSlice";

export const store = configureStore({
  reducer: {
    bookList: setBooksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
