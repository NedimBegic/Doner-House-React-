import React, { useState, useEffect, useRef } from "react";
import doner1 from "../../img/doner3.jpg";
import classes from "./Slider.module.css";
import doner2 from "../../img/proba.jpg";
import doner3 from "../../img/doner2.jpg";

const Slider = (props) => {
  const d = useRef();
  const [i, setI] = useState(0);
  const [anim, setAnim] = useState(false);
  const imageList = [doner1, doner2, doner3];
  // conditional styling for animations
  const animStyle = classes.all + " " + `${anim ? classes.anim : ""}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (i === 2) {
        setI(0);
        setAnim(true);
      } else {
        setI(i + 1);
        setAnim(true);
      }
    }, 10000);
    const animTimer = setTimeout(() => {
      setAnim(false);
    }, 4000);
    return () => {
      clearTimeout(timer);
      clearTimeout(animTimer);
    };
  }, [i, setI, anim, setAnim]);

  return (
    <div className={animStyle}>
      <img ref={d} src={imageList[i]} alt="" />
    </div>
  );
};

export default Slider;
