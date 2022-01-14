import styled from "styled-components";
import media from "../../assets/media/media";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 1rem 1rem 1rem 0rem;

  label {
    font-weight: 400;
    color: ${(props) => props.theme.grayText};
    font-size: 14px;
    margin-right: 0.5rem;
  }

  input {
    width: 3rem;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.orderTitle};
    font: inherit;
    padding-left: 0.5rem;
    background: none;
    color: ${(props) => props.theme.text};
  }

  ${media.tablet} {
    flex-direction: row;
    margin-bottom: 0.5rem;
  }
  ${media.desktop} {
    flex-direction: row;
    margin-bottom: 0.5rem;
  }
`;
