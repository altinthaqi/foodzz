import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: ${(props) => props.theme.thirdCol};
  color: white;
  padding: 0.3rem 1rem;
  height: 35px;

  width: 75px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 25px;
  font-weight: 500;
  font-family: "Murecho", sans-serif;

  .cartIcon {
    font-size: 18px;
  }

  #number {
    font-size: 18px;
    font-weight: 700;
  }

  animation: ${(props) =>
    props.btnHighlight === true ? "bump 300ms ease-out" : ""};

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;
