import media from "../../assets/media/media";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 70vh;
  width: 100%;
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url("https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  .space {
    flex: 1;
  }
  .box {
    flex: 1;
    background-color: #464670;
    color: white;
    justify-self: flex-start;
    max-width: 800px;
    border-radius: 15px 0px 0px 15px;

    .box-wrapper {
      padding: 10px 20px;
      width: 250px;

      button {
        padding: 7px 12px;
        margin: 5px 0px 20px 0px;
        font-weight: 500;
        background: none;
        border: 1px solid white;
        color: #ffffff;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.5s;

        &:hover,
        &:active {
          transition: all 0.5s;
          background-color: white;
          color: #464670;
        }
      }
    }
  }

  ${media.tablet} {
    .box-wrapper {
      padding: 80px 20px 80px 80px;
      width: 100% !important;
    }
  }
  ${media.desktop} {
    .box-wrapper {
      width: 100% !important;
      padding: 80px 20px 80px 80px;
    }
  }
`;
