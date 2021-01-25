import React from "react";
import styled from "styled-components";
import { ReactComponent as HtmlLogo } from "../Svg/html.svg";
import { ReactComponent as JsLogo } from "../Svg/JS.svg";
import { ReactComponent as TailwindLogo } from "../Svg/tailwind.svg";
import { ReactComponent as ReactLogo } from "../Svg/React.svg";


const Heading = styled.h1`
  text-align: center;
  font-family: "Nunito", sans-serif;
`;
const Container = styled.div`
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
  return (
    <Container>
      <Heading>
        Creator din loves designs and passionate <br /> about developing using
        these tools.
      </Heading>
      <LogoContainer>
        <Html />
        <Js />
        <Tailwind />
        <ReactLogoStyled />
      </LogoContainer>
    </Container>
  );
}

export default About;
