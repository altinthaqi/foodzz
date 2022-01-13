import styled from "styled-components";
import media from "../../assets/media/media";

export const Container = styled.div`
  height: 25vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #464670;
  color: white;

  .text {
    flex: 2;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;

    h2 {
      font-size: 21px;
      font-weight: 600;
      margin: 20px;
    }
  }
  .space {
    flex: 0;
    width: 100%;
  }

  ${media.tablet} {
    .text {
      h2 {
        max-width: 800px;
        font-size: 26px;
      }
    }
    .space {
      flex: 1;
      width: 100%;
    }
  }
  ${media.desktop} {
    .text {
      h2 {
        max-width: 800px;
        font-size: 31px;
      }
    }
    .space {
      flex: 1;
      width: 100%;
    }
  }
`;
