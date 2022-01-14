import React from "react";
import { Container } from "./CallToActStyled";
import { NavLink } from "react-router-dom";

function CallToAct() {
  return (
    <Container>
      <div className="space"></div>
      <div className="box">
        <div className="box-wrapper">
          <h2>
            <i>Order your delicious foodzz</i>
          </h2>
          <p>Your favorite food, in high-quality ingredients!</p>
          <NavLink to="/order">
            <button>Order Now!</button>
          </NavLink>
        </div>
      </div>
    </Container>
  );
}

export default CallToAct;
