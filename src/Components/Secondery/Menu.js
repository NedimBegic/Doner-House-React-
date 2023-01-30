import React from "react";
import MealItem from "./MealItem";
import classes from "./Menu.module.css";

const DONER_MEALS = [
  {
    id: "d1",
    name: "Tangri Doner",
    price: 22.99,
  },
  {
    id: "d2",
    name: "Hariyali Doner",
    price: 16.5,
  },
  {
    id: "d3",
    name: "Galavat Doner",
    price: 12.99,
  },
  {
    id: "d4",
    name: "Boti Doner",
    price: 18.99,
  },
  {
    id: "d5",
    name: "Doner Tuhal",
    price: 18.99,
  },
  {
    id: "d6",
    name: "Mahi Seeks Doner",
    price: 18.99,
  },
];
const Menu = (props) => {
  const mealsList = DONER_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  const styling = classes.meals + " " + props.className;
  return (
    <section className={styling}>
      <div>
        <ul>{mealsList}</ul>
      </div>
    </section>
  );
};

export default Menu;
