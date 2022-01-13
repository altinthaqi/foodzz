import React, { useEffect } from "react";

function About(props) {
  const path = window.location.pathname;

  useEffect(() => {
    if (path === "/") {
      props.onPathChange("/");
    }
  }, [path]);

  return <div>about</div>;
}

export default About;
