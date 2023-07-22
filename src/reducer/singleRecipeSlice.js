import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  singleMeal: {},
  status: "idle",
  error: "",
};

const singleMealSlice = createSlice({
  name: "singleMeal",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchSingleMeal.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchSingleMeal.fulfilled, (state, action) => {
        state.singleMeal = action.payload;
        state.status = "idle";
      })
      .addCase(fetchSingleMeal.rejected, (state, action) => {
        state.status = "error";
        state.error = "There was a problem fetching recipes!";
      }),
});

export const fetchSingleMeal = createAsyncThunk(
  "singleMeal/fetch",
  async (id) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    return data.meals[0];
  }
);

export const getSingleMeal = (state) => state.singleMeal.singleMeal;
export const getStatus = (state) => state.singleMeal.status;
export const getError = (state) => state.singleMeal.error;

export default singleMealSlice.reducer;
