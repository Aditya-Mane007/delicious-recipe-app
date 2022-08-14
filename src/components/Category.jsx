import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiChopsticks, GiIndianPalace } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import React from "react";

const Category = () => {
  return (
    <List>
      <Slink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slink>
      <Slink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </Slink>
      <Slink to={"/cuisine/Indian"}>
        <GiIndianPalace />
        <h4>Indian</h4>
      </Slink>
      <Slink to={"/cuisine/Thai"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </Slink>
    </List>
  );
};
const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;
const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  tranform: scale(0.8);
  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
`;

export default Category;
