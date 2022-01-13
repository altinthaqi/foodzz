import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  label {
    font-weight: 500;
    margin-right: 1rem;
    color: ${(props) => props.theme.grayText};
  }
  input {
    width: 3rem;
    border-radius: 5px;
    border: none;
    font: inherit;
    padding-left: 0.5rem;
    background-color: ${(props) => props.theme.inputCol};
    color: white;
  }
`;
