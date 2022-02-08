import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import CategoryItem from "./components/CategoryItem/CategoryItem";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Navigation />
      </main>
      <Footer />
      <CategoryItem></CategoryItem>
    </div>
  );
}

export default App;
