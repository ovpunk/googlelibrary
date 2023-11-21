import { TBook } from "../types";

type TInitialData = {
  books: TBook[];
  flag: boolean;
};

export const initialData: TInitialData = {
  books: [],
  flag: false,
};
