import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AiFillPushpin } from "react-icons/ai";
import { GiFruitBowl } from "react-icons/gi";
import { BiSolidMapPin } from "react-icons/bi";
import { SiJusteat } from "react-icons/si";
import { getIngredient } from "../utils/helper";
import Loader from "../components/Loader";

import {
  getSingleMeal,
  getStatus,
  getError,
  fetchSingleMeal,
} from "../reducer/singleRecipeSlice";

function RecipeDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const status = useSelector(getStatus);
  const error = useSelector(getError);
  const meal = useSelector(getSingleMeal);

  const {
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strTags,
  } = meal;
  const ingredients = getIngredient(meal);
  const tags = strTags?.split(",").filter((tag) => tag !== "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(fetchSingleMeal(id));
  }, []);

  if (status === "loading") {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  if (status === "error") console.log(error);

  return (
    <div className="pt-36 pb-20 w-full">
      {/* TOP SECTION */}
      <div className="w-full px-8 lg:px-20">
        {/* SIDE FLAG */}
        <div className="mx-auto flex flex-col sm:flex-row justify-center gap-3">
          <div className="bg-stone-400 px-1 sm:flex">
            <div className="p-3 gap-3 sm:gap-1 uppercase font-extrabold flex sm:flex-col justify-center items-center">
              <span>e</span>
              <span>n</span>
              <span>j</span>
              <span>o</span>
              <span>y</span>
              <SiJusteat size={28} />
            </div>
          </div>
          {/* IMAGE */}
          <img
            src={strMealThumb}
            alt={strMeal}
            className="w-52 sm:w-72 mx-auto sm:mx-0 rounded-md drop-shadow-2xl object-cover mb-9 sm:mb-0"
          />
          {/* INFO */}
          <div className="sm:ml-6 sm:relative sm:w-48">
            <p className="text-xl lg:text-3xl font-extrabold">{strMeal}</p>

            <div className="mt-4 mb-9 sm:mb-4 mx-auto flex flex-wrap">
              {tags?.map((item, index) => (
                <span
                  key={index}
                  className="bg-stone-300 mb-3 text-sm py-0.5 px-3 shadow-lg capitalize mr-2 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="sm:absolute bottom-0 sm:w-48">
              <p className="text-sm flex justify-between">
                <span className="flex items-center gap-1">
                  <GiFruitBowl color="green" size={20} />
                  Category
                </span>
                <span className="font-bold italic">{strCategory}</span>
              </p>
              <p className="text-sm flex justify-between">
                <span className="flex items-center gap-1 my-1">
                  <BiSolidMapPin color="darkred" size={20} />
                  Cuisine
                </span>
                <span className="font-bold italic">{strArea}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-8 lg:px-20 pt-5 mt-20">
        <div className="w-full flex flex-col md:flex-row gap-8 md:px-10">
          {/* INGREDIENTS */}
          <div className="w-full md:basis-2/5 md:w-2/4 md:border-r border-slate-800 pr-1">
            <div className="flex flex-col gap-3">
              <p className="text-red-800 text-2xl mb-3 font-bold">
                Ingredients
              </p>

              {ingredients?.map((ingredient, index) => {
                return (
                  <p key={index} className="flex gap-2">
                    <AiFillPushpin className="text-red-800 text-xl" />
                    {ingredient}
                  </p>
                );
              })}
            </div>
          </div>
          {/* INSTRUCTIONS */}
          <div className="w-full md:w-2/4 2xl:pl-10 md:mt-0">
            <div className="flex flex-col gap-3 ">
              <p className="text-red-800 text-2xl mb-3 font-bold">
                Instructions
              </p>

              <div className="flex flex-wrap gap-4">
                <p className="flex items-center gap-2 px-4 py-1">
                  {strInstructions}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
