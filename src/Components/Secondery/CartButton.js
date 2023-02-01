import React from "react";
import classes from "./CartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

import CartIcon from "../Ul/CartIcon";

const CartButton = (props) => {
  const ctxCart = useContext(CartContext);

  const numOfItems = ctxCart.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const btnClasses =
    props.className +
    " " +
    `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`;

  const { items } = ctxCart;
  useEffect(() => {
    if (items.length === 0) return;
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);

      return () => {
        clearTimeout(timer);
      };
    }, 300);
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numOfItems}</span>
    </button>
  );
};

export default CartButton;
