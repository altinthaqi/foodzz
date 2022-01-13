import styled from "styled-components";

export const Summary = styled.section`
  text-align: center;
  max-width: 700px;
  width: 90%;
  margin: auto;
  margin-top: 2rem;
  position: relative;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.orderTitle};
  border-radius: 10px 10px 0px 0px;
  padding: 1rem;

  h2 {
    font-size: 36px;
    margin-top: 0;
  }

  h2,
  p {
    max-width: 600px;
    margin: auto;
    padding: 10px 0px;
    font-weight: 700;
  }

  p {
    font-size: 18px;
  }
`;

export const ImageContainer = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(100, 5, 64, 0.4),
      rgba(70, 4, 59, 0.7)
    ),
    url("https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60");
  width: 100%;
  max-width: 800px;
  height: 400px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  image-rendering: optimizeQuality;
  margin: auto;
  border-radius: 20px;
`;
