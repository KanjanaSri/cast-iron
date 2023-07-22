import { configureStore } from "@reduxjs/toolkit";
import singleMealReducer from "./reducer/singleRecipeSlice";
import mealsReducer from "./reducer/mealsSlice";

const store = configureStore({
  reducer: {
    meals: mealsReducer,
    singleMeal: singleMealReducer,
  },
});

export default store;
