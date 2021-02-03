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
  width: auto;
`;
const Sign = styled.p`
  width: 15%;
  text-align: right;
`;
const SignContainer = styled.div`
  display: flex;
  width: 15%;
  justify-content: space-evenly;
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
        <a
          className="hover:text-blue-500 transition-all"
          href="https://github.com/dinndev"
        >
          <Github />
        </a>
        <a
          className="hover:text-blue-500 transition-all"
          href="https://twitter.com/dinndevv"
        >
          <Twitter />
        </a>
        <a
          className="hover:text-blue-500 transition-all"
          href="https://www.instagram.com/diin_oo/"
        >
          <Insta />
        </a>
      </LinkContainer>
      <SignContainer>
        <p className="text-xs">Made with</p>
        <span>{<HeartLogo className="text-red-500" />}</span>
        <p className="text-xs">By din</p>
      </SignContainer>
    </Container>
  );
}

export default Footer;
