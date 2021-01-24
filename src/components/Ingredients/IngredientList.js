import React from "react";

import "./IngredientList.css";

const IngredientList = (props) => {
  const titleStyle = {
    color: 'blue'
  }
  return (
    <section className="ingredient-list">
      <ul>
        {props.ingredients.map((ig, index) => (
          <li key={ig.id}>
            {!ig.edit ? (
              <span style={ig.status ? titleStyle : null} onClick={() => props.showInput(index)}>{ig.title}</span>
            ) : (
              <div className="form-change">
                <input
                  className="form-input"
                  type="text"
                  onChange={(event) => props.changed(event.target.value.trim(), index)}
                  placeholder={ig.title}
                ></input>
                <span 
                className="form-button"
                onClick={() => props.showInput(index)}>Save</span>
              </div>
            )}
            {ig.status ? (
              <span
                className="status-button"
                onClick={() => props.isComplete(index)}
              >
                <img
                  alt="change status"
                  src="https://img.icons8.com/office/20/000000/checkmark--v1.png"
                />
              </span>
            ) : (
              <span
                onClick={() => props.isComplete(index)}
                className="status-button"
              >
                <img
                  alt="change status"
                  src="https://img.icons8.com/android/20/000000/clock.png"
                />
              </span>
            )}
            <span
              className="delete-button"
              onClick={() => props.onRemoveItem(ig.id)}
            >
              <img
                alt="Delete"
                src="https://img.icons8.com/ios-filled/20/000000/delete-sign--v1.png"
              />
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientList;
