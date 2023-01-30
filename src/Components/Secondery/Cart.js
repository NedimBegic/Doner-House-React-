import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../Ul/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "../Secondery/CartItem";

const Cart = (props) => {
  const ctxCart = useContext(CartContext);

  const totalAmount = `$${ctxCart.totalAmount.toFixed(2)}`;
  const hasItems = ctxCart.items.length > 0;

  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {};
  const cartitems = (
    <ul className={classes["cart-items"]}>
      {ctxCart.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
