import React from "react";
import { Container, BannerTitle, BannerDesc } from "./BannerStyled";

function Banner() {
  return (
    <Container>
      <BannerTitle>
        <span>~</span> foodzz <span>~</span>
      </BannerTitle>
      <BannerDesc>best foodzz in town</BannerDesc>
    </Container>
  );
}

export default Banner;
