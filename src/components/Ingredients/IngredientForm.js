import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  const [inputTitle, setInputTitle] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIngredient({ title: inputTitle, status: false, edit: false });
  };
  return (
    <section className="ingredient-form">
      <Card>
        <form className="input-form" onSubmit={submitHandler}>
          <div className="form-control">
            <input
              type="text"
              id="title"
              value={inputTitle}
              onChange={(event) => setInputTitle(event.target.value)}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add task</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
