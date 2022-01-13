import Meals from "../components/Meals/Meals";
import { useEffect } from "react";
import styled from "styled-components";

function Order(props) {
  const path = window.location.pathname;
  useEffect(() => {
    if (path === "/order") {
      props.onPathChange("/order");
    }
  }, [path]);
  return (
    <Container>
      <main>
        <Meals />
      </main>
    </Container>
  );
}

export const Container = styled.div`
  background-color: ${(props) => props.theme.body};
`;

export default Order;
