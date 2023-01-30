import React from "react";
import classes from "./OurFood.module.css";
import food1 from "../../img/food1.png";
import food2 from "../../img/food2.png";
import food3 from "../../img/food3.png";
import food4 from "../../img/food4.png";
import food5 from "../../img/food5.png";
import food6 from "../../img/food6.png";

const OurFood = (props) => {
  const food = [
    {
      id: "d1",
      name: "Tangri Doner",
      price: 22.99,
      photo: food1,
      desc:
        "Chicken legs roasted on open fire with hot spices and laced with butter",
    },
    {
      id: "d2",
      name: "Hariyali Doner",
      price: 16.5,
      photo: food2,
      desc:
        "Grilled beef marinated in a mixture of pomegranate juice and crushed walnuts",
    },
    {
      id: "d3",
      name: "Galavat Doner",
      price: 12.99,
      photo: food3,
      desc:
        "Made of minced beef meat with spices, a specialty of Lucknow & Delhi",
    },
    {
      id: "d4",
      name: "Boti Doner",
      price: 18.99,
      photo: food4,
      desc: "Grilled lamb, typically marinated in yogurt with parsley",
    },
    {
      id: "d5",
      name: "Doner Tuhal",
      price: 18.99,
      photo: food5,
      desc:
        "Extra chunks or strips of lean beef marinated in paprika and other spices",
    },
    {
      id: "d6",
      name: "Mahi Seeks Doner",
      price: 18.99,
      photo: food6,
      desc:
        "Fish seekh doner with cumin seeds, coriander seeds, lemon juice and oil",
    },
  ];
  return (
    <div className={classes.all}>
      {food.map((item) => {
        return (
          <li key={Math.random() + item.id}>
            <h5>{item.name}</h5>
            <img src={item.photo} alt="" />
            <p>{item.desc}</p>
          </li>
        );
      })}
    </div>
  );
};

export default OurFood;
