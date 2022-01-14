import React, { useEffect } from "react";
import styled from "styled-components";
import media from "../assets/media/media";

import Banner from "../components/About/Banner";
import TextSection from "../components/About/TextSection";
import Introduction from "../components/About/Introduction";
import Boxes from "../components/About/Boxes";
import CallToAct from "../components/About/CallToAct";
import Footer from "../components/About/Footer";

function About(props) {
  const path = window.location.pathname;

  useEffect(() => {
    if (path === "/") {
      window.scrollTo(0, 0);
      props.onPathChange("/");
    }
  }, [path]);

  return (
    <>
      <Banner />
      <TextSection />
      <Grouper>
        <Introduction />
        <Boxes />
      </Grouper>
      <CallToAct />
      <Footer />
    </>
  );
}

export const Grouper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.body};
`;

export default About;
