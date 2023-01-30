import React from "react";
import Menu from "../Secondery/Menu";
import classes from "./Order.module.css";
import CartButton from "../Secondery/CartButton";

const Order = (props) => {
  return (
    <div className={classes.all}>
      <CartButton
        className={classes.cart}
        onShowCart={props.onShowCart}
        onHideCart={props.onHideCart}
      />
      <Menu className={classes.menu} />
    </div>
  );
};

export default Order;
