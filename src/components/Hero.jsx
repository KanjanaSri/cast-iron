import React from "react";

function Hero() {
  return (
    <div className="w-full h-screen">
      <div className="relative w-full h-full">
        <img
          src="/hero_bg_unsplash.jpg"
          alt="food image"
          className="w-full h-full object-cover"
        ></img>
      </div>
      <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4">
        <p
          className="text-white
         text-4xl md:text-5xl font-bold text-center italic"
        >
          <span className="mr-2">Cast Iron... </span> where Flavors <br />
          Come to Life
        </p>

        <p className="text-sm mt-20 text-center text-zinc-400 max-w-3xl">
          We invite you to savor the magic of our food recipes, transforming
          everyday meals into extraordinary dining experiences.
          <span className="hidden sm:inline">
            {" "}
            Discover the joy of cooking through our extensive selection of
            easy-to-follow instructions.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Hero;
