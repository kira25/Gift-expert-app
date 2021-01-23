import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  //   const categories = ["One Punch", "Samurai X", "Dragon ball"];
  const [categories, setCategories] = useState(["One Punch"]);

  //   const handelAdd = () => {
  //     const newCategories = [...categories, "Pokemon"];
  //     setCategories(newCategories);
  //   };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={() => handelAdd()}>Agregar</button> */}
      <ol>
        {categories.map((category, i) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
