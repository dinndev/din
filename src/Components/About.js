import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as HtmlLogo } from "../Svg/html.svg";
import { ReactComponent as JsLogo } from "../Svg/JS.svg";
import { ReactComponent as TailwindLogo } from "../Svg/tailwind.svg";
import { ReactComponent as ReactLogo } from "../Svg/React.svg";

export const Heading = styled.h1`
  text-align: center;
  font-family: "Nunito", sans-serif;
  opacity: ${({ animate }) => (animate ? animate.visibility : 0)};
  transform: ${({ animate }) =>
    animate ? `translateY(${animate.move})` : "translateY(20px)"};
  transition: opacity 1s ease, transform 0.7s ease-in-out;
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  margin: 4rem;
  transition: opacity 1.3s ease, transform 0.8s ease-in-out;
  opacity: ${({ animate }) => animate.visibility};
  transform: ${({ animate }) => `translateY(${animate.move})`};
`;
const Html = styled(HtmlLogo)`
  height: 2rem;
  width: 2rem;
`;
const Js = styled(JsLogo)`
  height: 2rem;
  width: 2rem;
`;
const Tailwind = styled(TailwindLogo)`
  height: 2rem;
  width: 2rem;
`;
const ReactLogoStyled = styled(ReactLogo)`
  height: 2rem;
  width: 2rem;
`;

function About() {
  const [show, setShow] = useState({ move: "20px", visibility: 0 });
  const handleShow = () => {
    return setShow({ move: "0px", visibility: 1 });
  };
  useEffect(() => {
    handleShow();
  }, []);

  return (
    <Container>
      <Heading animate={show} className="md:text-3xl text-3xl">
        Creator din loves designs and passionate <br /> about developing using
        these tools.
      </Heading>
      <LogoContainer animate={show}>
        <Html />
        <Js />
        <Tailwind />
        <ReactLogoStyled />
      </LogoContainer>
    </Container>
  );
}

export default About;
