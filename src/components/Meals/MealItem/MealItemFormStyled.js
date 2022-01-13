import styled from "styled-components";

export const Form = styled.form`
  @import url("https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap");

  text-align: right;
  button {
    font: inherit;
    cursor: pointer;
    background-color: ${(props) => props.theme.callToAct};
    border: 1px solid ${(props) => props.theme.callToAct};
    color: white;
    padding: 0.35rem 2rem;
    border-radius: 20px;
    font-weight: bold;
    font-family: "Sigmar One", cursive;
    transition: all 0.5s;

    &:hover,
    &:active {
      transition: all 0.5s;
      background-color: #fff1fd;
      border: 1px solid ${(props) => props.theme.callToAct};
      color: ${(props) => props.theme.callToAct};
    }
  }
`;
