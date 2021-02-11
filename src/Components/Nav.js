import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const ListContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
  transition: color 0.5s ease-out;
  :hover {
    color: #0976da;
  }
`;

function Nav() {
  return (
    <ListContainer className="font-roboto font-bold">
      <List>
        <NavLink exact activeClassName="active-link" to="/">
          About
        </NavLink>
      </List>
      <List>
        <NavLink exact activeClassName="active-link" to="/Works">
          Works
        </NavLink>
      </List>
      <List>
        <a href="mailto:dinndev@gmail.com">Contact</a>
      </List>
    </ListContainer>
  );
}

export default Nav;
