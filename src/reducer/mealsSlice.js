import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  meals: [],
  status: "idle",
  error: "",
};

const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchAsyncMeals.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAsyncMeals.fulfilled, (state, action) => {
        state.meals = action.payload;
        state.status = "idle";
      })
      .addCase(fetchAsyncMeals.rejected, (state, action) => {
        state.status = "error";
        state.error = "There was a problem fetching meals!";
      }),
});

export const fetchAsyncMeals = createAsyncThunk(
  "meals/fetch",
  async (query) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await response.json();
    return data?.meals;
  }
);

export const getMeals = (state) => state.meals.meals;
export const getStatus = (state) => state.meals.status;
export const getError = (state) => state.meals.error;

export default mealsSlice.reducer;
