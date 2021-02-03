import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: RobotoBold;
  width: 30%;
`;
const List = styled.li`
  list-style-type: none;
  cursor: pointer;
`;

function Nav() {
  return (
    <ListContainer>
      <List>
        <Link className="hover:text-blue-500 transition-all" to="/">
          About
        </Link>
      </List>
      <List>
        <Link className="hover:text-blue-500 transition-all" to="/Works">Works</Link>
      </List>
      <List>
        <a className="hover:text-blue-500 transition-all" href="mailto:dinndev@gmail.com">Contact</a>
      </List>
    </ListContainer>
  );
}

export default Nav;
