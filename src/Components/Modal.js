import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const OverLay = styled(motion.div)`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  background: rgba(235, 235, 235, 0.69);
  backdrop-filter: blur(4px);
  z-index: 100;
  cursor: pointer;
`;
const ModalContent = styled(motion.div)`
  z-index: 1000;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  border-radius: 10px;
  background: #f9f9f9;
  border-radius: 20px 20px 0px 0px;
  color: #666565;
  height: 35rem;
  @media (min-width: 768px) {
    height: 20rem /* 320px */;
  }
  @media (min-width: 1280px) {
    height: 21rem /* 320px */;
  }
`;

function Modal({ children, modalHide }) {
  return (
    <>
      <OverLay
        onClick={modalHide}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        }}
        exit={{
          opacity: 0,
        }}
      />
      <ModalContent
        initial={{
          y: 400,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        }}
        exit={{
          y: 400,
          transition: {
            duration: 0.5,
            opacity: 0,
          },
        }}
        className="p-8 sm:p-6 relative lg:w-8/12 overflow-hidden xl:w-7/12 md:w-3/4 md:relative w-full sm:w-9/12  xl:max-w-4xl flex-col md:flex-row"
      >
        {children}
      </ModalContent>
    </>
  );
}

export default Modal;
