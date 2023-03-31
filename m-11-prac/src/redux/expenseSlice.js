import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getExpenseData = createAsyncThunk("expense/get", async () => {
  try {
    let searchParams = new URLSearchParams(window.location.search);
    const response = await axios.get(
      `https://mock-10-server-hhc7.onrender.com/trackers?${searchParams.toString()}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const updateData = createAsyncThunk(
  "expense/update",
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await axios.patch(
        `https://mock-10-server-hhc7.onrender.com/trackers/${id}`,
        data
      );
      thunkAPI.dispatch(getExpenseData());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    resetExpense: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getExpenseData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getExpenseData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getExpenseData.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

// Action creators are generated for each case reducer function
export const { resetExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
