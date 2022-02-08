import styled from "styled-components";

const SimpleButton = styled.button`
  background-color: #7d4646;
  color: white;
  height: 50px;
  width: 100px;
  border: none;
`;

const Button = ({ text, action }) => {
  return (
    <SimpleButton className="simple-button" onClick={action}>
      Let's see
    </SimpleButton>
  );
};

export default Button;
