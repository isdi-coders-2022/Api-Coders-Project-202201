import { useContext, useEffect } from "react";
import styled from "styled-components";
import Cocktail from "../../components/Cocktail/Cocktail";
import { H2 } from "../../globalStyles";
import useAPI from "../../hooks/useApi";
import CocktailDataContext from "../../store/contexts/CocktailDataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

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
  height: 80vh;
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
  const { loadCocktailsAPI, addCocktailAPI, loadCocktailDetailsAPI } = useAPI();

  const { searchText, cocktails } = useContext(CocktailDataContext);

  useEffect(() => {
    loadCocktailsAPI(searchText);
  }, [searchText, loadCocktailsAPI]);

  const addCocktailToFavorite = (cocktail) => {
    cocktail.id = cocktail.idDrink;
    addCocktailAPI(cocktail);
  };

  let navigate = useNavigate();

  const seeCocktailDetails = (cocktail) => {
    loadCocktailDetailsAPI(cocktail.idDrink);
    navigate(`/home/view/${cocktail.idDrink}`);
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
            buttonText={<FontAwesomeIcon icon={faStar} />}
            buttonOnClick={() => {
              addCocktailToFavorite(cocktail);
            }}
            actionCard={(event) => {
              event.preventDefault();
              seeCocktailDetails(cocktail);
            }}
          />
        ))}
      </Ul>
    </>
  );
};

export default HomePage;
