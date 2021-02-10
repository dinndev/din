import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as HtmlLogo } from "../Svg/html.svg";
import { ReactComponent as JsLogo } from "../Svg/JS.svg";
import { ReactComponent as TailwindLogo } from "../Svg/tailwind.svg";
import { ReactComponent as ReactLogo } from "../Svg/React.svg";
import { AnimatePresence, motion } from "framer-motion";
export const Heading = styled(motion.div)`
  text-align: center;
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
const LogoContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4rem;
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
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
    return () => {
      setShow(false);
    };
  }, []);

  return (
    <Container>
      <AnimatePresence>
        {show && (
          <Heading
            key="AboutHeading "
            initial={{
              y: 30,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
              },
            }}
            exit={{
              y: 30,
              opacity: 0,
              transition: {
                duration: 0.7,
              },
            }}
            className="md:text-3xl text-2xl font-nunitoBold font-semibold"
          >
            Creator din loves designs and passionate <br /> about developing
            using these tools.
          </Heading>
        )}
        {show && (
          <LogoContainer
            key="Logos"
            initial={{
              y: 30,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
              },
            }}
            exit={{
              y: 30,
              opacity: 0,
              transition: {
                duration: 0.8,
              },
            }}
            className="lg:w-3/12 sm:w-4/12 w-7/12"
          >
            <Html />
            <Js />
            <Tailwind />
            <ReactLogoStyled />
          </LogoContainer>
        )}
      </AnimatePresence>
    </Container>
  );
}

export default About;
