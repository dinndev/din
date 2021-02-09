import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as HtmlLogo } from "../Svg/html.svg";
import { ReactComponent as JsLogo } from "../Svg/JS.svg";
import { ReactComponent as TailwindLogo } from "../Svg/tailwind.svg";
import { ReactComponent as ReactLogo } from "../Svg/React.svg";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { animateShow, hide } from "../Themes";

export const Heading = styled.h1`
  text-align: center;
  transition: opacity 1s ease, transform 0.8s ease-in-out;
  opacity: ${({ animate }) => (animate ? animate.visibility : 1)};
  transform: ${({ animate }) =>
    animate ? `translateY(${animate.move})` : "translateY(0px)"};
  .show-enter {
    opacity: 0;
    transform: translateY(20px);
  }
  .show-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 1s ease, transform 0.7s ease-in-out;
  }
  .show-exit {
    opacity: 1;
  }
  .show-exit-active {
    opacity: 0;
    transform: translateY(20px);
  }
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4rem;
  transition: opacity 1.3s ease, transform 0.9s ease-in-out;
  opacity: ${({ animate }) => (animate ? animate.visibility : 1)};
  transform: ${({ animate }) =>
    animate ? `translateY(${animate.move})` : "translateY(0px)"};
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
  const [show, setShow] = useState(hide);
  useEffect(() => {
    setShow(animateShow);
    return () => {
      setShow(hide);
    };
  }, []);

  return (
    <Container>
      <Heading
        animate={show}
        className="md:text-3xl text-3xl font-nunitoBold font-semibold"
      >
        Creator din loves designs and passionate <br /> about developing using
        these tools.
      </Heading>
      <LogoContainer animate={show} className="lg:w-3/12 sm:w-4/12 w-7/12">
        <Html />
        <Js />
        <Tailwind />
        <ReactLogoStyled />
      </LogoContainer>
    </Container>
  );
}

export default About;
