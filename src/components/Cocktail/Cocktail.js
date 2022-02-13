import Button from "../Button/Button";
import styled from "styled-components";
import React from "react";

const CocktailCard = styled.li`
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  width: 290px;
  height: 190px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h3`
  color: white;
  font-size: 28px;
  font-family: Arial;
  padding-left: 20px;
  padding-bottom: 15px;
  margin: 0;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  z-index: -1;
  filter: brightness(0.7);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  padding-top: 20px;
  z-index: 2;
`;

const Cocktail = ({
  cocktail: { strDrink, strDrinkThumb },
  buttonOnClick,
  actionCard,
  buttonText,
}) => {
  return (
    <CocktailCard className="cocktail-card">
      <ButtonContainer className="button-container">
        <Button text={buttonText} actionOnClick={buttonOnClick} />
      </ButtonContainer>
      <Title className="cocktail__title">{strDrink}</Title>
      <Image
        onClick={actionCard}
        className="cocktail__image"
        src={strDrinkThumb}
        alt={strDrink}
      />
    </CocktailCard>
  );
};

export default Cocktail;
