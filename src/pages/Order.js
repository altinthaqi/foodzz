import Meals from "../components/Meals/Meals";
import { useEffect } from "react";
import styled from "styled-components";

function Order() {
  const path = window.location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
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
