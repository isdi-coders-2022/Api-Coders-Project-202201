import React from "react";
import styled from "styled-components";

const HeaderTheme = styled.header`
  background-color: #163344;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

const Title = styled.h1`
  font-family: "Sacramento", cursive;
  color: white;
  font-size: 30px;
`;
const Header = () => {
  return (
    <HeaderTheme>
      <Title className="header__title">
        Cocktails <i className="fas fa-glass-martini-alt title__icon"></i>
      </Title>
    </HeaderTheme>
  );
};

export default Header;
