import React from "react";
import classes from "./Recipe.module.css"

const Repcipe = (props) => {
  return (
    <div className={classes.repcipe}>
      <h1>{props.title}</h1>
      <p className={classes.Calories}>{Math.round(props.calories)} Cal</p>
      <ul>
        {props.ingredients.map((ingredients) => {
            return(
                <li>{ingredients.text}</li>
            )
        })}
      </ul>
      <img className={classes.image} src={props.image} alt="image of a very delicious food"></img>
    </div>
  );
};

export default Repcipe;
