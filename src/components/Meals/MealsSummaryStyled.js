import styled from "styled-components";

export const ImageContainer = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    ),
    url("https://images.unsplash.com/photo-1609427468793-2f0e77c388a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80");
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  position: relative;

  h2 {
    color: white;
    font-size: 41px;
    margin: 0px;
    font-weight: 700;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    border-bottom: 2px solid #8181ad;
    border-right: 2px solid #ababd1;
    border-radius: 15px;
    padding: 10px 18px;
    text-align: center;
  }
`;
