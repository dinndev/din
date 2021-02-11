import React, { useState, useEffect } from "react";
import { Container } from "./About";
import { animateShow, hide } from "../Themes";
import styled from "styled-components";
import { ReactComponent as Group } from "../Svg/Group.svg";
import { ReactComponent as Dashboard } from "../Svg/pkg2.svg";
import { ReactComponent as Npm } from "../Svg/pkg.svg";
import { AnimatePresence, motion } from "framer-motion";
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
  @media (max-height: 500px) {
    height: 65%;
  }
`;
const CardContainer = styled(motion.div)`
  ::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  width: 100%;
  color: #666565;
  min-height: 270px;

  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none; /* IE 10+ */
`;
const WorksHeading = styled(motion.div)`
  text-align: center;
  @media (max-height: 500px) {
    margin-bottom: 1rem;
  }
`;
const Button = styled.button`
  background-color: transparent;
  color: #0976da;
  font-size: 1rem;
  text-align: center;
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
  transition: all ease-in-out 0.5s;
  width: 45%;
  @media (min-width: 768px) {
    width: 25%;
  }
  @media (min-width: 640px) {
    width: 26%;
  }
  :hover {
    color: #0976da;
    background: transparent;
    font-weight: bold;
  }
`;

function Works() {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState([]);
  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {
    handleShow();
    return () => {
      setShow(false);
    };
  }, []);
  const handleModalHide = () => {
    setModalShow(false);
  };
  return (
    <Container>
      <AnimatePresence>
        {show && (
          <WorksHeading
            key="WorksHeading"
            className=" text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-4 lg:mb-10 font-nunitoBold font-semibold"
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
          >
            Some of my dedications and <br />
            creativity.
          </WorksHeading>
        )}
        {show && (
          <CardContainer
            key="Cards"
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
            className="font-nunitoBold xl:grid flex whitespace-nowrap items-center w-1/2 justify-items-center xl:grid-rows-none xl:grid-cols-3"
          >
            <Card className="justify-self-end flex items-center xl:col-span-1 flex-col justify-between ">
              <Group className="h-8 w-8 " />
              <p className="text-center">
                Explore your favorite artists, their <br /> masterpieces and
                tracks.
                <br />
                powered by Deezer Api.
              </p>
              <Button
                onClick={() => {
                  setModalData([...musix]);
                  setModalShow(true);
                }}
                className="tracking-wide w-full font-roboto font-black"
              >
                Musix
              </Button>
            </Card>
            <Card className=" mx-5 xl:mx-0 items-center  flex xl:col-span-1 flex-col justify-between ">
              <Npm className=" h-8 w-8 text-transparent " />
              <p className="text-center">
                React-UI library allows you to <br /> select and create easily
                <br />
                the best UI of your choice.
              </p>
              <Button
                onClick={() => {
                  setModalData([...reactMiniui]);
                  setModalShow(true);
                }}
                className="w-full  tracking-wide font-roboto font-black"
              >
                React-mini-ui
              </Button>
            </Card>
            <Card className="justify-self-start items-center  flex xl:col-span-1 flex-col justify-between">
              <Dashboard className="h-8 w-8 text-transparent" />
              <p className="text-center">
                Data representation responsive <br /> and light Ui design.
              </p>
              <Button
                onClick={() => {
                  setModalData([...dataDashBoard]);
                  setModalShow(true);
                }}
                className="w-full tracking-wide font-roboto font-black"
              >
                Dashboard-data
              </Button>
            </Card>
          </CardContainer>
        )}
        {modalShow &&
          Array.from(modalData).map(
            ({ description, image, svg, title, link, demo, id }) => {
              return (
                <Modal key="Modal" modalHide={handleModalHide}>
                  <div className="h-1/2 relative md:w-1/2 md:h-auto flex flex-col">
                    <div className="flex justify-between mb-2 sm:mb-6 md:mb-0 flex-col h-full">
                      <h1 className="text-2xl font-roboto font-bold">
                        {title.toUpperCase()}
                      </h1>
                      <p className="sm:text-lg md:text-base text-base my-4 sm:my-6 md:my-0 font-nunitoBold font-semibold">
                        {description}
                      </p>
                      <div className="flex h-1/3 w-full justify-between items-center flex-row md:flex-col">
                        <div className="flex md:w-full w-3/12">
                          {svg.map((path, i) => (
                            <span className="mr-6" key={i}>
                              {path}
                            </span>
                          ))}
                        </div>
                        <div className="flex w-2/4 sm:w-9/12 justify-start bottom-0 md:w-full items-center md:justify-start">
                          <DemoButton
                            as="a"
                            href={demo}
                            className=" text-sm md:text-md mr-4 md:mr-8 font-nunitoBold"
                          >
                            Demo
                          </DemoButton>
                          <Button
                            as="a"
                            href={link}
                            className=" text-center font-nunitoBold font-bold"
                          >
                            Github
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" lg:ml-6 flex items-end md:w-6/12 justify-center md:justify-between md:items-end md:flex-col">
                    <p
                      onClick={handleModalHide}
                      className="flex md:hidden absolute top-6 right-8 cursor-pointer text-lg font-nunitoBold font-bold"
                    >
                      x
                    </p>
                    <img
                      className=" mt-6 md:mt-0 rounded-xl"
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
