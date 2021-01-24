import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import "./Ingredient.css";

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const addIngredientHandler = (ingredient) => {
    setIngredients((prevIngredients) => [
      { id: Math.random().toString(), ...ingredient },
      ...prevIngredients
    ]);
  };
  const addStatusHandler = (index) => {
    const newStatus = ingredients[index].status;
    const updateIngredients = [...ingredients];
    updateIngredients[index].status = !newStatus;
    setIngredients(updateIngredients);
  };
  const showInputHandle = (index) => {
    const newEdit = ingredients[index].edit;
    const updateIngredients = [...ingredients];
    updateIngredients[index].edit = !newEdit;
    setIngredients(updateIngredients);
  };

  const removeIngredientHandler = (id) => {
    setIngredients((prevIngredients) =>
      prevIngredients.filter((ingredient) => ingredient.id !== id)
    );
    console.log(ingredients);
  };

  const changedTitleHandler = (title, index) => {
    const updateIngredients = [...ingredients];
    title ? updateIngredients[index].title = title : updateIngredients[index].title = ingredients[index].title;
    setIngredients(updateIngredients);
  };
  return (
    <div className="App">
      <h1 className="App-title">To do application</h1>
      <IngredientForm onAddIngredient={addIngredientHandler} />
      <section>
        <IngredientList
          showInput={showInputHandle}
          ingredients={ingredients}
          onRemoveItem={removeIngredientHandler}
          isComplete={addStatusHandler}
          changed={changedTitleHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
