import styled from "styled-components";
import media from "../../assets/media/media";

export const CartItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: auto;

  ${media.desktop} {
    max-height: 30rem;
  }
  ${media.tablet} {
    max-height: 30rem;
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
  color: ${(props) => props.theme.text};
`;

export const Actions = styled.div`
  text-align: right;

  button {
    font-weight: 500;
    cursor: pointer;
    color: ${(props) => props.theme.orderTitle};
    border: 1px solid ${(props) => props.theme.orderTitle};
    padding: 0.5rem 2rem;
    border-radius: 25px;
    margin-left: 1rem;
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.body};
  }

  button:hover,
  button:active {
    background-color: ${(props) => props.theme.orderTitle};
    color: white;
    border: 1px solid ${(props) => props.theme.body};
  }
`;
