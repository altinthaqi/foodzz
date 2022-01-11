import styled from "styled-components";

export const Summary = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .price {
    font-weight: bold;
    color: #8a2b06;
  }

  .amount {
    font-weight: bold;
    border: 1px solid #ccc;
    padding: 0.25rem 0.75rem;
    border-radius: 6px;
    color: #363636;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;

  button {
    font: inherit;
    font-weight: bold;
    font-size: 1.25rem;
    color: #8a2b06;
    border: 1px solid #8a2b06;
    width: 3rem;
    text-align: center;
    border-radius: 6px;
    background-color: transparent;
    cursor: pointer;
    margin-left: 1rem;
    margin: 0.25rem;
  }

  .button:hover,
  button:active {
    background-color: #8a2b06;
    color: white;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #8a2b06;
  padding: 1rem 0;
  margin: 1rem 0;

  h2 {
    margin: 0 0 0.5rem 0;
    color: #580000;
  }
`;
