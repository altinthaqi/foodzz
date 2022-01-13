import styled from "styled-components";
import media from "../../assets/media/media";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px 0px 50px 0px;
  background-color: ${(props) => props.theme.body};

  .first {
    transition: 0.5s all;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-position: center;
    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.7)
      ),
      url("https://images.unsplash.com/photo-1542444459-db37a5da9d5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80");

    &:hover {
      transition: 0.5s all;
      .title {
        transition: 0.5s all;
        opacity: 0;
      }

      .desc {
        transition: 1s all;
        opacity: 1;
        color: #9797ce;
      }
    }
  }

  .second {
    transition: 0.5s all;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-position: center;
    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.7)
      ),
      url("https://images.unsplash.com/photo-1625943554275-826250826b2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80");
    &:hover {
      transition: 0.5s all;
      .title {
        transition: 0.5s all;
        opacity: 0;
      }

      .desc {
        transition: 1s all;
        opacity: 1;
        color: #9797ce;
      }
    }
  }

  .third {
    transition: 0.5s all;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-position: center;
    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.7)
      ),
      url("https://images.unsplash.com/photo-1497415818126-3740914d3300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80");
    &:hover {
      transition: 0.5s all;
      .title {
        transition: 0.5s all;
        opacity: 0;
      }

      .desc {
        transition: 1s all;
        opacity: 1;
        color: #9797ce;
      }
    }
  }

  .imageContainer {
    height: 300px;
    width: 80%;
    max-width: 300px;
    margin: 20px;
    position: relative;
    border-radius: 20px;
    cursor: pointer;

    h3 {
      position: absolute;
      text-align: center;
      top: 50%;
      right: 50%;
      width: 80%;
      color: white;
      z-index: 100;
      transform: translate(50%, -50%);
      font-size: 21px;
    }

    .desc {
      opacity: 0;
    }
  }
`;
