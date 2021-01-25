import React from "react";
import styled from "styled-components";
import { ReactComponent as GithubLogo } from "../Svg/GH.svg";
import { ReactComponent as Heart } from "../Svg/Heart.svg";
import { ReactComponent as InstaLogo } from "../Svg/INSTA.svg";
import { ReactComponent as TwitterLogo } from "../Svg/TWITTER.svg";

const Container = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LinkContainer = styled.div`
  display: flex;
  width: 15%;
  align-items: center;
  justify-content: space-between;
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 60%;
`;
const Sign = styled.p`
  width: 15%;
  text-align: right;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const Github = styled(GithubLogo)`
  height: 1.5rem;
  width: 1.5rem;
`;
const Twitter = styled(TwitterLogo)`
  height: 1.5rem;
  width: 1.5rem;
`;
const Insta = styled(InstaLogo)`
  height: 1.5rem;
  width: 1.5rem;
`;

const HeartLogo = styled(Heart)`
  height: 1rem;
  width: 1rem;
  color: #ef5261;
`;

function Footer() {
  return (
    <Container>
      <LinkContainer>
        <a href="https://github.com/dinndev">
          <Github />
        </a>
        <a href="https://twitter.com/dinndevv">
          <Twitter />
        </a>
        <a href="https://www.instagram.com/diin_oo/">
          <Insta />
        </a>
      </LinkContainer>
      <Sign>Made with {<HeartLogo />} by din</Sign>
    </Container>
  );
}

export default Footer;
