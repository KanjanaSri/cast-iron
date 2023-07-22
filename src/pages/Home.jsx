import React from "react";
import Hero from "../components/Hero";
import Recipes from "../components/Recipes";

function Home() {
  return (
    <main className="w-full flex flex-col">
      <Hero />

      <section id="recipes" className="mx-4">
        <Recipes />
      </section>
    </main>
  );
}

export default Home;
