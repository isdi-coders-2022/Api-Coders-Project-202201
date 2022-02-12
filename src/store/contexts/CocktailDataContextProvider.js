import { useReducer, useState } from "react";
import cocktailsReducer from "../reducers/cocktailsReducer";
import localCocktailsReducer from "../reducers/localCocktailsReducer";
import CocktailDataContext from "./CocktailDataContext";

const CocktailDataContextProvider = ({ children }) => {
  const categoriesList = [
    {
      id: 1,
      name: "Ordinary Drink",
      url: "Ordinary_Drink",
      src: "https://assets-prd.punchdrink.com/wp-content/uploads/2019/10/23100724/Article-Fifty-Fifty-50-50-Martini-Really-a-Martini-Cocktail.jpg",
    },
    {
      id: 2,
      name: "Cocktail",
      altName: "Cocktail",
      src: "https://cdn.vox-cdn.com/thumbor/R7dsRRkeWF8uWL3MQE9reWjCTcs=/0x0:2000x1333/1200x675/filters:focal(840x506:1160x826)/cdn.vox-cdn.com/uploads/chorus_image/image/64046279/16541280823_9f1194a854_k.0.0.1506588886.0.jpg",
    },
    {
      id: 3,
      name: "Milk / Float / Shake",
      altName: "Milk_/_Float_/_Shake",
      src: "https://thedeliciousspoon.com/wp-content/uploads/2017/12/Winter-Sunshine-Rum-Cocktail-Blog-Post-4.jpg",
    },
    {
      id: 4,
      name: "Other/Unknown",
      altName: "Other/Unknown",
      src: "https://www.topgastronomico.es/wp-content/uploads/2021/03/Coctel.jpg",
    },
    {
      id: 5,
      name: "Cocoa",
      altName: "Cocoa",
      src: "http://unsobered.com/wp-content/uploads/2019/12/cocoa-cocktails.3.jpg",
    },
    {
      id: 6,
      name: "Shot",
      altName: "Shot",
      src: "https://vinepair.com/wp-content/uploads/2015/11/history-shot-social-500x261.jpg",
    },
    {
      id: 7,
      name: "Coffee / Tea",
      altName: "Coffee_/_Tea",
      src: "https://thekentuckygent.com/wp-content/uploads/2018/06/nespresso-coffee-cocktails-the-kentucky-gent-18.jpg",
    },
    {
      id: 8,
      name: "Homemade Liqueur",
      altName: "Homemade_Liqueur",
      src: "https://www.kleinworthco.com/wp-content/uploads/2013/09/How-to-Make-Homemade-Liquors-fruit-brandy.jpg",
    },
    {
      id: 9,
      name: "Punch / Party Drink",
      altName: "Punch_/_Party Drink",
      src: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://bodeguitadeenmedio.es/wp-content/uploads/2019/01/ea36b3082af0033ed1584d05fb1d4491e572e0d71cac104491f5c77fafeeb0ba_640-1014x487.jpg",
    },
    {
      id: 10,
      name: "Beer",
      altName: "Beer",
      src: "https://www.mensjournal.com/wp-content/uploads/gettyimages-119306391-dbf6dff2-dca2-4500-bda0-597072724ecf.jpg?w=900&h=506&crop=1&quality=86&strip=all",
    },
    {
      id: 11,
      name: "Soft Drink / Soda",
      altName: "Soft Drink_/_Soda",
      src: "https://d2td6mzj4f4e1e.cloudfront.net/wp-content/uploads/sites/9/2019/04/soft-drinks.jpg",
    },
  ];

  const [searchText, setSearchText] = useState("filter.php?c=Ordinary_Drink");

  const [cocktails, dispatch] = useReducer(cocktailsReducer, []);

  let [localCocktails, localDispatch] = useReducer(localCocktailsReducer, []);

  return (
    <CocktailDataContext.Provider
      value={{
        categoriesList,
        cocktails,
        dispatch,
        searchText,
        setSearchText,
        localCocktails,
        localDispatch,
      }}
    >
      {children}
    </CocktailDataContext.Provider>
  );
};

export default CocktailDataContextProvider;
