import React from "react";
import { CardContainer } from "./CardStyled";

function Card(props) {
  return <CardContainer>{props.children}</CardContainer>;
}

export default Card;
