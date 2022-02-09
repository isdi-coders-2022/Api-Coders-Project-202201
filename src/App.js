import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import CocktailDetails from "./components/CocktailDetails/CocktailDetails";
import Button from "./components/Button/Button";
import { useEffect } from "react";
import useAPI from "./hooks/useApi";
import { Routes, Route, Navigate } from "react-router-dom";
import CategoryPage from "./components/CategoryPage/CategoryPage";

function App() {
  const { loadCocktailsAPI } = useAPI();

  useEffect(() => {
    loadCocktailsAPI();
  }, [loadCocktailsAPI]);

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
