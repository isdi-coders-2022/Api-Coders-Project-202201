import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";
import { useContext, useEffect } from "react";
import useAPI from "./hooks/useApi";
import CocktailDataContext from "./store/contexts/CocktailDataContext";

function App() {
  const { loadCocktailsAPI } = useAPI();

  const { searchText } = useContext(CocktailDataContext);

  useEffect(() => {
    loadCocktailsAPI(searchText);
  }, [searchText, loadCocktailsAPI]);

  return (
    <div className="App">
      <Header />
      <main>
        <Navigation />
      </main>
      <Footer />
      <Button />
    </div>
  );
}

export default App;
