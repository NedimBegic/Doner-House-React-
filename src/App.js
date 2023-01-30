import classes from "./App.module.css";
import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Slider from "./Components/Ul/Slider";
import AboutUs from "./Components/Main/AboutUs";
import OurFood from "./Components/Main/OurFood";
import Order from "./Components/Main/Order";
import Cart from "./Components/Secondery/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [content, setContent] = useState(0);
  const [showCart, setShowCart] = useState(false);
  // for main content
  const handleShow = (num) => {
    setContent(num);
  };
  // for cart
  const showCartHandler = (_) => {
    setShowCart(true);
  };
  const hideCartHandler = (_) => {
    setShowCart(false);
  };

  return (
    <CartProvider className={classes.app}>
      <Slider />
      {showCart && <Cart onHideCart={hideCartHandler} />}
      <Header showContent={handleShow} />
      {content === 0 && <AboutUs />}
      {content === 1 && <OurFood />}
      {content === 2 && <Order onShowCart={showCartHandler} />}
    </CartProvider>
  );
}

export default App;
