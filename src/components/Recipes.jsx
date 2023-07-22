import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiSearchAlt2, BiReset } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import Loader from "./Loader";
import RecipeCard from "./RecipeCard";

import {
  getMeals,
  getStatus,
  getError,
  fetchAsyncMeals,
} from "../reducer/mealsSlice";

function Recipes() {
  const dispatch = useDispatch();
  const notInitialRender = useRef(false);

  const meals = useSelector(getMeals);
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  const [query, setQuery] = useState("");
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleClearInput = (e) => {
    setInput("");
  };

  const handleReset = (e) => {
    setInput("");
    setQuery("");
    dispatch(fetchAsyncMeals(""));
  };

  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      e.preventDefault();
      setQuery(input);
      setInput("");
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setQuery(input);
    setInput("");
  };

  useEffect(() => {
    // prevent fetching when clear input
    if (notInitialRender.current) {
      if (!query) return;
      dispatch(fetchAsyncMeals(query));
    } else {
      notInitialRender.current = true;
    }
    // Initial Render
    dispatch(fetchAsyncMeals(query));
  }, [query]);

  if (status === "loading") {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  if (status === "error") console.log(error);

  return (
    <div className="w-full">
      <div className="flex items-center justify-center pt-10 pb-5 px-0 md:px-10">
        <form className="flex justify-center" onSubmit={handleSearchSubmit}>
          <div className="flex justify-center items-center">
            <button
              onClick={handleReset}
              className="bg-red-800 text-white rounded-full w-10 h-9 sm:h-10 px-2 mr-2 flex justify-center items-center"
            >
              <BiReset size={20} />
            </button>
            {/* Search Bar */}
            <div className="sm:w-96 text-gray-600 flex pl-3 border-4 border-red-800 rounded-3xl shadow-xl">
              <input
                type="text"
                placeholder="eg. pie, chicken"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="w-full border-none text-md p-2.5 pl-5 bg-transparent outline-none placeholder:text-sm "
              />
              <div className="my-1 flex divide-x-2 divide-solid divide-gray-600">
                <button
                  onClick={handleClearInput}
                  className="w-9 flex items-center justify-center"
                >
                  <AiOutlineClose size={22} />
                </button>
                <button
                  onClick={handleSearchSubmit}
                  className="mr-2 w-9 flex items-center justify-center"
                >
                  <BiSearchAlt2 size={22} />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {meals?.length ? (
        <>
          <div className="w-full flex justify-center flex-wrap gap-10 px-0 lg:px-6 py-10">
            {meals?.map((item, index) => (
              <RecipeCard meal={item} key={index} />
            ))}
          </div>
        </>
      ) : (
        <div className="w-full items-center justify-center py-10">
          <p className="text-center">No Recipe Found</p>
        </div>
      )}
    </div>
  );
}

export default Recipes;
