import styled from "styled-components";
import media from "../../assets/media/media";

export const BannerDesc = styled.p`
  color: white;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
`;

export const BannerTitle = styled.h1`
  color: white;
  text-align: center;
  font-size: 51px;
  border: 2px solid #464670;
  border-radius: 15px;
  padding: 10px 18px;

  span {
    color: #464670;
  }

  ${media.tablet} {
    font-size: 71px;
  }
  ${media.desktop} {
    font-size: 71px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.7)
    ),
    url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-repeat: no-repeat;
  background-size: cover;
`;
