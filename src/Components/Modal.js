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
          y: 60,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.3,
          },
        }}
        exit={{
          y: 60,
          opacity: 0,
        }}
        className="p-10 relative sm:p-8 lg:w-8/12 overflow-hidden xl:w-7/12 md:w-3/4 md:relative w-11/12 sm:w-9/12  xl:max-w-4xl flex-col md:flex-row md:h-80 lg:h-80 h-4/5 sm:h-5/6"
      >
        {children}
      </ModalContent>
    </>
  );
}

export default Modal;
