import React, { useState, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Header.module.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import doner from "../../img/doner.gif";
import logo from "../../img/logo.png";

const Header = (props) => {
  // render classes of hamburger divs
  const mid = useRef();
  const [topClass, setTopClass] = useState(false);
  const [botClass, setBotClass] = useState(false);
  // render section when clicking on hamburger
  const [show, setShow] = useState(false);

  // close the offcanvas div and returning style for divs in hamburger
  const handleClose = () => {
    mid.current.style.display = "block";
    setTopClass(false);
    setBotClass(false);
    setShow(false);
  };

  // open the offcanvas div and making new animation style for divs in hamburger
  const handleShow = () => {
    mid.current.style.display = "none";
    setTopClass(true);
    setBotClass(true);
    setShow(true);
  };

  return (
    <Navbar fixed="top" className={classes.header}>
      <Container>
        <h1>
          Doner House <img className={classes.logo} src={logo} alt="" />
        </h1>
        <nav className={classes.nav}>
          <Button onClick={() => props.showContent(0)} variant="warning">
            About Us
          </Button>
          <Button onClick={() => props.showContent(1)} variant="warning">
            Our Food
          </Button>
          <Button onClick={() => props.showContent(2)} variant="warning">
            Order
          </Button>
        </nav>
        <button
          variant="primary"
          className={classes.hamburger}
          onClick={handleShow}
        >
          <div className={topClass ? classes.top : ""}></div>
          <div ref={mid}></div>
          <div className={botClass ? classes.bot : ""}></div>
        </button>
        <Offcanvas className={classes.bar} show={show} onHide={handleClose}>
          <Offcanvas.Body className={classes.sections}>
            <Button
              onClick={() => {
                props.showContent(0);
                handleClose();
              }}
              variant="warning"
            >
              About Us
            </Button>
            <Button
              onClick={() => {
                props.showContent(1);
                handleClose();
              }}
              variant="dark"
            >
              Our Food
            </Button>
            <Button
              onClick={() => {
                props.showContent(2);
                handleClose();
              }}
              variant="dark"
            >
              Order
            </Button>
            <img src={doner} alt="" />
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
