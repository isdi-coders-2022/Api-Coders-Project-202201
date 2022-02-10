import { useContext, useEffect } from "react";
import useAPI from "./hooks/useApi";
import { Routes, Route, Navigate } from "react-router-dom";
import CocktailDataContext from "./store/contexts/CocktailDataContext";
import HomePage from "./pages/HomePage/HomePage";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import FormMyBarPage from "./pages/FormMyBarPage/FormMyBarPage";
import MyBarPage from "./pages/MyBarPage/MyBarPage";

function App() {
  const { loadCocktailsAPI } = useAPI();

  const { searchText } = useContext(CocktailDataContext);

  useEffect(() => {
    loadCocktailsAPI(searchText);
  }, [searchText, loadCocktailsAPI]);

  return (
    <>
      <Header />

      <main>
        <Navigation />

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/mybar">
            <Route index element={<MyBarPage />} />
            {/*<Route path="/view/:id" element={<CocktailPage />} />*/}
            <Route path="new" element={<FormMyBarPage />} />
            {/*<Route
          path="edit/:id"
          element={"FormPage />"}
          /> */}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
