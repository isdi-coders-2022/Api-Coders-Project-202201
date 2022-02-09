import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";
import { useContext, useEffect } from "react";
import useAPI from "./hooks/useApi";
import { Routes, Route, Navigate } from "react-router-dom";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import CocktailDataContext from "./store/contexts/CocktailDataContext";


function App() {
  const { loadCocktailsAPI } = useAPI();

  const { searchText } = useContext(CocktailDataContext);

  useEffect(() => {
    loadCocktailsAPI(searchText);
  }, [searchText, loadCocktailsAPI]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="components/CategoryPage" element={<CategoryPage />}></Route>
      <div className="App">
        <Header />
        <main>
          <CocktailDetails />
          <Navigation />
        </main>
        <Footer />
        <Button />
      </div>
    </Routes>
  );
}

export default App;
