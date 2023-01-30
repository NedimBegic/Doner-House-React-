import React, { useState, useEffect, useRef } from "react";
import doner1 from "../../img/doner3.jpg";
import classes from "./Slider.module.css";
import doner2 from "../../img/proba.jpg";
import doner3 from "../../img/doner2.jpg";

const Slider = (props) => {
  const d = useRef();
  const [i, setI] = useState(0);
  const imageList = [doner1, doner2, doner3];
  useEffect(() => {
    const timer = setTimeout(() => {
      if (i === 2) {
        setI(0);
      } else {
        setI(i + 1);
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, [i, setI]);

  return (
    <div className={classes.all}>
      <img ref={d} src={imageList[i]} alt="" />
    </div>
  );
};

export default Slider;
