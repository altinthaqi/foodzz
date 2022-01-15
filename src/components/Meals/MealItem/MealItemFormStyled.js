import styled from "styled-components";
import media from "../../../assets/media/media";

export const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: right;

  button {
    font: inherit;
    cursor: pointer;
    background: none;
    border: 1px solid ${(props) => props.theme.orderTitle};
    color: ${(props) => props.theme.orderTitle};
    padding: 0.35rem 1rem;
    border-radius: 8px;
    font-weight: 600;

    transition: all 0.5s;

    &:hover,
    &:active {
      transition: all 0.5s;
      background-color: ${(props) => props.theme.orderTitle};
      border: 1px solid ${(props) => props.theme.orderTitle};
      color: white;
    }
  }

  ${media.tablet} {
    flex-direction: column;
    width: 125px;
    button {
      padding: 0.35rem 2rem;
    }
  }
  ${media.desktop} {
    flex-direction: column;
    width: 125px;
    button {
      padding: 0.35rem 2rem;
    }
  }
`;
