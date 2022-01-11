import styled from "styled-components";

export const CartItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: auto;
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
    border: 1px solid ${(props) => props.theme.text};
    padding: 0.5rem 2rem;
    border-radius: 25px;
    margin-left: 1rem;
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
  }

  button:hover,
  button:active {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
    border: 1px solid ${(props) => props.theme.body};
  }
`;
