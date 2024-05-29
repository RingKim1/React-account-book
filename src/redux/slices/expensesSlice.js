import { createSlice } from "@reduxjs/toolkit";
import fakeData from "../../assets/fakeData";

const initialState = fakeData;

const expensesSlice = createSlice({
  name: "expenses",
  initialState: initialState,
  reducers: {
    addExpense: (state, action) => [...state, action.payload],
    removeItem: (state, action) =>
      state.filter((el) => String(el.id) !== action.payload),
    modifyItem: (state, action) =>
      state.map((el) =>
        String(el.id) === action.payload.id
          ? {
              ...el,
              date: action.payload.dateRef.current.value,
              category: action.payload.categoryRef.current.value,
              amount: action.payload.amountRef.current.value,
              content: action.payload.contentRef.current.value,
            }
          : el
      ),
  },
});

export const { addExpense, removeItem, modifyItem } = expensesSlice.actions;
export default expensesSlice.reducer;
