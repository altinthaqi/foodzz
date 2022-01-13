import React from "react";
import { Container } from "./TextSectionStyled";

function TextSection() {
  return (
    <Container>
      <div className="text">
        <h2>
          A casual restaurant specializing in amazing foodzz with the highest
          quality at a moderate price.
        </h2>
      </div>
      <div className="space"></div>
    </Container>
  );
}

export default TextSection;
