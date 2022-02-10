import Button from "../Button/Button";
import styled from "styled-components";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
// import { faStar as starSolid } from "@fortawesome/free-solid-svg-icons";

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

const Title = styled.h2`
  color: white;
  font-size: 36px;
  font-family: Roboto;
  padding-left: 20px;
  padding-bottom: 5px;
  margin: 0;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: auto;
  z-index: -1;
  filter: brightness(0.7);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  padding-top: 20px;
`;

const Cocktail = ({
  cocktail: { strDrink, strDrinkThumb },
  actionButton,
  actionCard,
}) => {
  return (
    <CocktailCard onClick={actionCard} className="cocktail-card">
      <ButtonContainer className="button-container">
        <Button
          type="star"
          text={
            // selected ? (
            // <FontAwesomeIcon icon={starSolid} />
            //   ) : (
            <FontAwesomeIcon icon={faStar} />
            //   )
          }
          onClick={actionButton}
        />
      </ButtonContainer>
      <Title className="cocktail__title">{strDrink}</Title>
      <Image className="cocktail__image" src={strDrinkThumb} alt={strDrink} />
    </CocktailCard>
  );
};

export default Cocktail;
