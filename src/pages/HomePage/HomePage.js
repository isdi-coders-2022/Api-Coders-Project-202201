import { useContext, useEffect } from "react";

import styled from "styled-components";
import Cocktail from "../../components/Cocktail/Cocktail";
import { H2 } from "../../globalStyles";
import useAPI from "../../hooks/useApi";

import CocktailDataContext from "../../store/contexts/CocktailDataContext";

const ExploreButton = styled.button`
  background-color: #7d4646;
  border: none;
  color: white;
  width: 100px;
  height: 50px;
  margin-top: 100px;
`;
const BackgroundPage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 70vh;
  overflow: hidden;
`;
const Image = styled.img`
  width: auto;
  height: 100%;
  position: absolute;
  z-index: -1;
  @media (min-width: 600px) {
    width: 100vw;
    height: auto;
    transform: translate(0, -300px);
  }
`;

const SimpleText = styled.p`
  margin-top: 100px;
  color: white;
  width: 80%;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomePage = () => {
  const { loadCocktailsAPI, addCocktailAPI } = useAPI();

  const { searchText, cocktails } = useContext(CocktailDataContext);

  useEffect(() => {
    loadCocktailsAPI(searchText);
  }, [searchText, loadCocktailsAPI]);

  const addCocktailToFavorite = (cocktail) => {
    addCocktailAPI(cocktail);
  };

  return (
    <>
      <BackgroundPage>
        <SimpleText>
          Because everything starts with a drink , explore ours
        </SimpleText>
        <ExploreButton>Let's see</ExploreButton>
        <Image
          className="HomePage__background"
          src="images/background-home.webp"
          alt="background-cocktails"
        />
      </BackgroundPage>
      <H2>Cocktails</H2>

      <Ul>
        {cocktails.map((cocktail) => (
          <Cocktail
            key={cocktail.idDrink}
            cocktail={cocktail}
            buttonOnClick={() => {
              addCocktailToFavorite(cocktail);
            }}
          />
        ))}
      </Ul>
    </>
  );
};

export default HomePage;
