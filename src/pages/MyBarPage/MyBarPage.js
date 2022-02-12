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
  const { cocktails } = useContext(CocktailDataContext);
  const { loadLocalCocktailsAPI } = useAPI();

  useEffect(() => {
    loadLocalCocktailsAPI();
  }, [loadLocalCocktailsAPI]);

  return (
    <>
      <H2>My Bar</H2>
      <Ul>
        {cocktails.map((cocktail) => (
          <Cocktail
            buttonText={<FontAwesomeIcon icon={starSolid} />}
            key={cocktail.idDrink}
            cocktail={cocktail}
          />
        ))}
      </Ul>
    </>
  );
};

export default MyBarPage;
