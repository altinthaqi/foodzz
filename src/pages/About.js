import React, { useEffect } from "react";
import Banner from "../components/About/Banner";
import styled from "styled-components";
import TextSection from "../components/About/TextSection";
import media from "../assets/media/media";
import Introduction from "../components/About/Introduction";
import Boxes from "../components/About/Boxes";

function About(props) {
  const path = window.location.pathname;

  useEffect(() => {
    if (path === "/") {
      props.onPathChange("/");
    }
  }, [path]);

  return (
    <>
      <Banner />
      <TextSection />
      <Introduction />
      <Boxes />
      <Container>
        <div className="space"></div>
        <div className="box">
          <div className="box-wrapper">
            <h2>
              <i>Parties up to 30 guests</i>
            </h2>
            <p>
              Parties of up to 30 guests may be seated in the private luxury
              hall.
            </p>
            <p className="desc">Learn more...</p>
          </div>
        </div>
      </Container>
    </>
  );
}

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
      padding: 80px 20px 80px 80px;

      p {
        padding: 10px 0px;
        font-weight: 500;
        color: #d8d8d8;
      }

      .desc {
        font-size: 14px;
        cursor: pointer;
      }
    }
  }
`;

export default About;
