import styled from "styled-components";

const CoctailDescription = styled.section`
  font-family: Recursive;
  margin-bottom: 100px;
`;

const CocktailName = styled.h1`
  font-size: 24px;
  font-family: Piazzolla;
  font-weight: normal;
  padding-left: 20px;
`;

const ImageContainer = styled.div`
  width: 100vw;
  height: 200px;
  overflow: hidden;
`;

const CocktailImage = styled.img`
  width: 100vw;
`;

const DescriptionContainer = styled.div`
  padding-left: 10px;
  padding-right: 20px;
  font-size: 15px;
`;

const CocktailDetails = ({
  cocktail: { name, imgURL, category, ingredients, measure, instructions },
}) => {
  return (
    <CoctailDescription className="cocktail-description">
      <CocktailName className="cocktail-description__name">{name}</CocktailName>
      <ImageContainer className="image-container">
        <CocktailImage
          className="cocktail-description__image"
          src={imgURL}
          alt={name}
        />
      </ImageContainer>
      <DescriptionContainer className="description-container">
        <p className="cocktail-description__category">
          {`Category: ${category}`}
        </p>
        <p className="cocktail-description__ingredients">
          Ingredient: {ingredients} {measure}
        </p>
        <p className="cocktail-description__instructions">
          Instractions: {instructions}
        </p>
      </DescriptionContainer>
    </CoctailDescription>
  );
};

export default CocktailDetails;
