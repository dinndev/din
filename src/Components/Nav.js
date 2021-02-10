import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  @media (min-width: 468px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 30%;
  }
`;
const List = styled.li`
  list-style-type: none;
  cursor: pointer;
`;

function Nav() {
  return (
    <ListContainer className="font-roboto font-bold">
      <List className="">
        <Link className="hover:text-blue-500 transition-all" to="/din">
          About
        </Link>
      </List>
      <List>
        <Link className="hover:text-blue-500 transition" to="/Works">
          Works
        </Link>
      </List>
      <List>
        <a
          className="hover:text-blue-500 transition-all"
          href="mailto:dinndev@gmail.com"
        >
          Contact
        </a>
      </List>
    </ListContainer>
  );
}

export default Nav;
