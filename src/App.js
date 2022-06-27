import "./styles/global.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";
import axios from "axios";
import { useState, useEffect } from "react";

const RECIPE_API_URL = "https://api.edamam.com/api/recipes/v2";
const RECIPE_API_ID = "3f0cd962";
const RECIPE_API_KEY = "ece4a6f9c51a3f87d1225fd520a22345";

function App() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const searchRecipes = async (event) => {
    setResults([]);
    setIsLoading(true);
    event.preventDefault();
    await axios
      .get(
        `${RECIPE_API_URL}?type=public&q=${event.target.searchbar.value}&app_id=${RECIPE_API_ID}&app_key=${RECIPE_API_KEY}&random=true`
      )
      .then((response) => {
        // console.log(response);
        setResults(response.data.hits);
        setIsLoading(false);
        setSearchTerm(event.target.searchbar.value);
      });
  };

  useEffect(() => {
    // searchRecipes();
  }, []);

  // console.log("results", results);

  return (
    <>
      <Header />
      <Search searchRecipes={searchRecipes} />
      <Results
        results={results}
        isLoading={isLoading}
        searchTerm={searchTerm}
      />
      <Footer />
    </>
  );
}

export default App;
