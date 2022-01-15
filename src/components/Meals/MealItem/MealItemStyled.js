import styled from "styled-components";
import media from "../../../assets/media/media";

export const Meal = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 0px;
  padding: 1rem 0rem;
  border-bottom: 1px solid ${(props) => props.theme.borderBottomCartItem};
  color: ${(props) => props.theme.text};

  h3 {
    color: ${(props) => props.theme.text};
    font-family: "Sigmar One", cursive;
    margin: 10px 0px;
  }

  .description {
    color: ${(props) => props.theme.grayText};
    max-width: 100%;
    font-weight: 400;
    font-size: 14px;
    padding: 5px 0px;
  }

  .link {
    font-weight: 400;
    font-size: 14px;
    margin: 5px 0px;
    color: ${(props) => props.theme.callToAct};
  }

  .price {
    font-weight: bold;
    color: ${(props) => props.theme.priceCol};
    font-size: 1.2rem;
  }

  ${media.tablet} {
    flex-direction: row;
    margin: 20px;
    .description {
      max-width: 90%;
    }
  }
  ${media.desktop} {
    flex-direction: row;
    margin: 20px;
    .description {
      max-width: 90%;
    }
  }
`;
