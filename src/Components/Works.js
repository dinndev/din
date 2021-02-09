import React, { useState, useEffect } from "react";
import { Container, Heading } from "./About";
import { animateShow, hide } from "../Themes";
import styled from "styled-components";
import { ReactComponent as Group } from "../Svg/Group.svg";
import { ReactComponent as Dashboard } from "../Svg/pkg2.svg";
import { ReactComponent as Npm } from "../Svg/pkg.svg";
import { AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import { dataDashBoard, reactMiniui, musix } from "../modalData";

const Card = styled.div`
  overflow: hidden;
  border-radius: 10px;
  background-color: #f2f2f2;
  justify-content: space-between;
  padding: 1.2rem;
  height: 75%;
  min-width: 350px;
  @media (min-width: 1280px) {
    min-width: 85%;
  }
`;
const CardContainer = styled.div`
  ::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  width: 100%;
  color: #666565;
  min-height: 270px;
  transition: opacity 1.3s ease, transform 0.9s ease-in-out;
  opacity: ${({ animate }) => (animate ? animate.visibility : 1)};
  transform: ${({ animate }) =>
    animate ? `translateY(${animate.move})` : "translateY(0px)"};
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none; /* IE 10+ */
`;
const WorksHeading = styled(Heading)`
  text-align: center;
  display: flex;
  color: ${({ theme }) => theme.backround};
  transition: opacity 1s ease, transform 0.8s ease-in-out;
  opacity: ${({ animate }) => (animate ? animate.visibility : 1)};
`;
const Button = styled.button`
  background-color: transparent;
  color: #0976da;
  width: 15%;
  font-size: 1rem;
  text-align: left;
  outline: none;
  :focus {
    outline: 0;
  }
  :hover {
    color: #666565;
    transition: all ease 0.3s;
  }
`;
const DemoButton = styled(Button)`
  background-color: #0b71cf;
  color: white;
  padding: 0.2rem;
  border-radius: 3px;
  text-align: center;
  width: 25%;
  @media (min-width: 768px) {
    width: 75%;
  }
`;

function Works() {
  const [show, setShow] = useState(hide);
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState([]);
  console.log(modalData, modalShow);
  const handleShow = () => {
    setShow(animateShow);
  };

  useEffect(() => {
    handleShow();
    return () => {
      setShow(hide);
    };
  }, []);
  const handleModalHide = () => {
    setModalShow(false);
  };
  return (
    <Container>
      {console.log}
      <WorksHeading
        animate={show}
        className="text-3xl mb-0 sm:mb-8 lg:mb-10 font-nunitoBold font-semibold"
      >
        Some of my dedications and <br />
        creativity.
      </WorksHeading>
      <CardContainer
        animate={show}
        className="font-nunitoBold xl:grid flex whitespace-nowrap items-center w-1/2 justify-items-center xl:grid-rows-none xl:grid-cols-3"
      >
        <Card className="justify-self-end flex xl:col-span-1 flex-col justify-between ">
          <Group className="h-8 w-8 " />
          <p>
            Explore your favorite artists , their <br /> masterpieces and
            tracks.
            <br />
            powered by deezer.
          </p>
          <Button
            onClick={() => {
              setModalData([...musix]);
              setModalShow(true);
            }}
            className="tracking-wide font-roboto font-black"
          >
            Musix
          </Button>
        </Card>
        <Card className=" mx-5 xl:mx-0 flex xl:col-span-1 flex-col justify-between ">
          <Npm className=" h-8 w-8 text-transparent " />
          <p>
            Explore your favorite artists , their <br /> masterpieces and
            tracks.
            <br />
            powered by deezer.
          </p>
          <Button
            onClick={() => {
              setModalData([...reactMiniui]);
              setModalShow(true);
            }}
            className="tracking-wide font-roboto font-black"
          >
            React-mini-ui
          </Button>
        </Card>
        <Card className="justify-self-start flex xl:col-span-1 flex-col justify-between">
          <Dashboard className="h-8 w-8 text-transparent" />
          <p>
            Explore your favorite artists , their <br /> masterpieces and
            tracks.
            <br />
            powered by deezer.
          </p>
          <Button
            onClick={() => {
              setModalData([...dataDashBoard]);
              setModalShow(true);
            }}
            className="tracking-wide font-roboto font-black"
          >
            Dashboard-data
          </Button>
        </Card>
      </CardContainer>
      <AnimatePresence>
        {modalShow &&
          Array.from(modalData).map(
            ({ description, image, svg, title, link, demo, id }, index) => {
              return (
                <Modal modalHide={handleModalHide} key={id}>
                  <div className="h-1/3 md:w-1/2 md:h-auto flex flex-col">
                    <div className="flex justify-between flex-col h-full">
                      <h1 className="text-2xl font-roboto font-bold">
                        {title.toUpperCase()}
                      </h1>
                      <p className="sm:text-lg md:text-base text-base my-2 md:my-0 font-nunitoBold font-semibold">
                        {description}
                      </p>
                      <div className="flex md:w-1/4 xl:w-1/5 sm:w-3/12 w-4/12 justify-between">
                        {svg.map((path, i) => (
                          <span key={i}>{path}</span>
                        ))}
                      </div>
                      <div className="flex absolute md:static w-9/12 md:mb-0 mb-4 justify-center bottom-0 md:w-2/5 lg:w-1/4 items-center md:justify-between">
                        <DemoButton
                          as="a"
                          href={demo}
                          className="text-md mr-3 md:mr-0 w-10/12 font-nunitoBold"
                        >
                          Demo
                        </DemoButton>
                        <Button
                          as="a"
                          href={link}
                          className="font-nunitoBold font-bold"
                        >
                          Github
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="lg:ml-6 flex items-center md:w-6/12 justify-center md:justify-between md:items-end md:flex-col">
                    <p
                      onClick={handleModalHide}
                      className=" md:hidden absolute top-7 right-10 cursor-pointer text-lg font-nunitoBold font-bold"
                    >
                      x
                    </p>
                    <img
                      className="mt-10 md:mt-0 rounded-xl"
                      src={image}
                      alt={title}
                    />
                  </div>
                </Modal>
              );
            }
          )}
      </AnimatePresence>
    </Container>
  );
}

export default Works;
