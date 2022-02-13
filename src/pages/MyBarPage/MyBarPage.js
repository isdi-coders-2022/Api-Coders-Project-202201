import { useContext, useEffect } from "react";
import styled from "styled-components";
import Cocktail from "../../components/Cocktail/Cocktail";
import { H2 } from "../../globalStyles";
import useAPI from "../../hooks/useApi";
import CocktailDataContext from "../../store/contexts/CocktailDataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as starSolid } from "@fortawesome/free-solid-svg-icons";

const Ul = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MyBarPage = () => {
  const { localCocktails } = useContext(CocktailDataContext);
  const { loadLocalCocktailsAPI, deleteCocktailApi } = useAPI();

  useEffect(() => {
    loadLocalCocktailsAPI();
  }, [loadLocalCocktailsAPI]);

  const deleteCocktailFromFavorites = (idDrink) => {
    deleteCocktailApi(idDrink);
    loadLocalCocktailsAPI();
  };

  return (
    <>
      <H2>My Bar</H2>
      <Ul>
        {localCocktails.map((cocktail) => (
          <Cocktail
            key={cocktail.id}
            cocktail={cocktail}
            buttonText={<FontAwesomeIcon icon={starSolid} />}
            buttonOnClick={() => {
              deleteCocktailFromFavorites(cocktail.id);
            }}
          />
        ))}
      </Ul>
    </>
  );
};

export default MyBarPage;
