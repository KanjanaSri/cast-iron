import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ meal }) {
  const { idMeal, strMeal, strTags, strMealThumb } = meal;
  const tags = strTags?.split(",").filter((tag) => tag !== "");

  return (
    <Link to={`/meal/${idMeal}`} className="w-80">
      <div className="shadow w-full rounded-lg">
        <img
          src={strMealThumb}
          alt={strMeal}
          className="rounded-t-lg h-[200px] md:h-[200px] w-full object-cover hover:scale-95 duration-300"
        />

        <div className="p-3">
          <p className="font-semibold">{strMeal}</p>

          <div className="mt-2 flex flex-wrap">
            {tags?.map((item, index) => (
              <span
                key={index}
                className="px-2 py-1 mr-1 my-1 text-white text-xs capitalize bg-red-900 rounded-xl"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;
