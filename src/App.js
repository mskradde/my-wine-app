import React, { useEffect } from "react";
import "./App.css";
import fetchWine from "./api/WineAPI";
import LoadingScreen from "./components/LoadingScreen";
import ResultScreen from "./components/ResultScreen";

function App() {
  const [allWines, setAllWines] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  async function getWines() {
    const newWines = await fetchWine();
    setAllWines(newWines);
    setIsLoading(false);
  }

  useEffect(() => {
    getWines();
  }, []);
  if (isLoading || allWines.length < 1) {
    return <LoadingScreen />;
  }

  return <ResultScreen allWines={allWines} />;
}

export default App;
