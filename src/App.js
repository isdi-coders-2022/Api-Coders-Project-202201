import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import CocktailDetails from "./components/CocktailDetails/CocktailDetails";
import Button from "./components/Button/Button";
import { useEffect } from "react";
import useAPI from "./hooks/useApi";

function App() {
  const { loadCocktailsAPI } = useAPI();

  useEffect(() => {
    loadCocktailsAPI();
  }, [loadCocktailsAPI]);

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
