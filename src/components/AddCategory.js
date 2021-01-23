import React, { useState } from "react";
import PropTpyes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInput} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTpyes.func.isRequired,
};
