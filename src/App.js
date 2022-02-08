import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import CocktailDetails from "./components/CocktailDetails/CocktailDetails";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <CocktailDetails />
        <Navigation />
      </main>
      <Footer />
      <Button />
    </div>
  );
}

export default App;
