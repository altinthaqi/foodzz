import React from "react";
import { Container } from "./BoxesStyled";

function Boxes() {
  return (
    <Container>
      <div className="imageContainer first">
        <h3 className="title">Wine & Beverages</h3>
        <h3 className="desc">The best Wines and Beverages in town!</h3>
      </div>

      <div className="imageContainer second">
        <h3 className="title">Dining</h3>
        <h3 className="desc">Amazing foodzz, the perfect place to be.</h3>
      </div>

      <div className="imageContainer third">
        <h3 className="title">Cakes</h3>
        <h3 className="desc">
          Our desserts served after an amazing foodzz, will melt in your mouth.
        </h3>
      </div>
    </Container>
  );
}

export default Boxes;
