import React from "react";
import classes from "./AboutUs.module.css";
import { SocialIcon } from "react-social-icons";

const AboutUs = (props) => {
  return (
    <div className={classes.box}>
      <div className={classes.all}>
        <h2>Doners done right</h2>
        <div>
          <p>Doners made using premium lean meat, </p>
          <p> served in handmade toasted breads </p>
          <p>with signature sauces.</p>
        </div>
      </div>
      <div className={classes.social}>
        <h2>Contact us</h2>
        <div>
          <SocialIcon
            className={classes.icon}
            style={{ height: 40, width: 40 }}
            network="facebook"
            bgColor="#3b5998"
            fgColor="white"
          />
          <SocialIcon
            className={classes.icon}
            style={{ height: 40, width: 40 }}
            network="instagram"
            bgColor="#F56040"
            fgColor="white"
          />
          <SocialIcon
            className={classes.icon}
            style={{ height: 40, width: 40 }}
            network="twitter"
            bgColor="#1DA1F2"
            fgColor="white"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
