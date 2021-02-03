import React from "react";
import { Container, Heading } from "./About";
import styled from "styled-components";
import { ReactComponent as HtmlLogo } from "../Svg/html.svg";
import { ReactComponent as JsLogo } from "../Svg/JS.svg";
import { ReactComponent as TailwindLogo } from "../Svg/tailwind.svg";
import { ReactComponent as ReactLogo } from "../Svg/React.svg";
import { ReactComponent as Group } from "../Svg/Group.svg";
import { ReactComponent as Dashboard } from "../Svg/dashboard.svg";
import { ReactComponent as Npm } from "../Svg/NPM.svg";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 10px;
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 80%;
`;
const CardButton = styled.a;
function Works() {
  return (
    <Container>
      <Heading className="md:text-2xl h-1/5 lg:text-3xl mb-2">
        Some of my dedications and <br /> creativity.
      </Heading>
      <CardContainer>
        <Card></Card>
      </CardContainer>
    </Container>
  );
}

export default Works;
