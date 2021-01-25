import React from "react";
import styled from "styled-components";

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
      <List>About</List>
      <List>Works</List>
      <List>Contact</List>
    </ListContainer>
  );
}

export default Nav;
