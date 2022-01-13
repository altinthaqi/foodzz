import styled from "styled-components";
import media from "../../assets/media/media";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0px;
  background-color: ${(props) => props.theme.body};

  h2 {
    font-weight: 500;
    font-size: 26px;
    margin: 10px 30px;
    color: ${(props) => props.theme.text};
  }
  p {
    margin: 10px 30px;
    color: ${(props) => props.theme.grayText};
    font-weight: 500;
  }
  h2,
  p {
    text-align: center;
    max-width: 800px;
  }

  ${media.tablet} {
    h2 {
      font-size: 31px;
    }
  }
  ${media.desktop} {
    h2 {
      font-size: 36px;
    }
    p {
      font-size: 18px;
    }
  }
`;
