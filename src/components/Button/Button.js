import styled from "styled-components";

const SimpleButton = styled.button`
  background-color: #7d4646;
  color: white;
  height: 50px;
  width: 100px;
  border: none;
`;

const ButtonStar = styled.button`
  border: none;
  width: 33.33px;
  height: 31.67px;
  font-size: 31px;
  text-align: center;
  padding: 0;
  color: #fff;
  background-color: transparent;
`;

const Button = ({ text, action, type }) => {
  return (
    <>
      {type === "star" && <ButtonStar onClick={action}>{text}</ButtonStar>}

      {type === "simple" && (
        <SimpleButton className="simple-button" onClick={action}>
          {text}
        </SimpleButton>
      )}
    </>
  );
};

export default Button;
