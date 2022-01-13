import styled from "styled-components";

export const Container = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap");
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  box-shadow: 0 3px 5px rgba(36, 36, 36, 0.1);
  z-index: 10;

  h3 {
    font-family: "Sigmar One", cursive;
  }

  a {
    color: ${(props) => props.theme.text};
  }

  .themeIcon {
    cursor: pointer;
  }
`;