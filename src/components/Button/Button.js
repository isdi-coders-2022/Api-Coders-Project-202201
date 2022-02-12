import styled from "styled-components";

const StarButton = styled.button`
  background-color: transparent;
  color: white;
  height: 50px;
  width: 100px;
  border: none;
  font-size: 30px;

  &:active {
    font-size: 50px;
  }
`;

const Button = ({ text, actionOnClick }) => {
  return <StarButton onClick={actionOnClick}>{text}</StarButton>;
};

export default Button;
