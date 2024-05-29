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
    modifyItem: (state, action) => console.log(action.payload),
    // state.map((el) =>
    //   String(el.id) === action.payload.id
    //     ? {
    //         ...el,
    //         date:
    //           action.payload.dateRef.value ||
    //           action.payload.dateRef.placeholder,
    //         category:
    //           action.payload.categoryRef.value ||
    //           action.payload.categoryRef.placeholder,
    //         amount:
    //           action.payload.amountRef.value ||
    //           action.payload.amountRef.placeholder,
    //         content:
    //           action.payload.contentRef.value ||
    //           action.payload.contentRef.placeholder,
    //       }
    //     : el
    // ),
  },
});

export const { addExpense, removeItem, modifyItem } = expensesSlice.actions;
export default expensesSlice.reducer;
