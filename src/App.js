import React, { useEffect } from "react";
import "./App.css";
import fetchWine from "./api/WineAPI";

function App() {
  const [allWines, setAllWines] = React.useState(null);
  async function getWines() {
    const newWines = await fetchWine();
    setAllWines(newWines);
    console.log(allWines);
  }

  useEffect(() => {
    getWines();
  }, []);
  return (
    <div className="App">
      <main>
        <ul>
          {allWines?.map((wine) => {
            return console.log(wine.wine);
          })}
        </ul>
      </main>
      <header>My Wine App</header>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
