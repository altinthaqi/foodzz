import styled from "styled-components";

export const Meal = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${(props) => props.theme.borderBottomCartItem};
  color: ${(props) => props.theme.text};

  h3 {
    margin: 0 0 0.25rem 0;
    color: ${(props) => props.theme.text};

    font-family: "Sigmar One", cursive;
  }

  .description {
    color: ${(props) => props.theme.grayText};
  }

  .price {
    margin-top: 0.25rem;
    font-weight: bold;
    color: ${(props) => props.theme.priceCol};
    font-size: 1.2rem;
  }
`;
