import { configureStore } from "@reduxjs/toolkit";
import expensesSlice from "../slices/expensesSlice.js";

const store = configureStore({ reducer: { expenses: expensesSlice } });

export default store;
