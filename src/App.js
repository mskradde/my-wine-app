import React, { useEffect, useState } from "react";
import "./App.css";
import fetchWine from "./api/WineAPI";
import List from "./components/List";
import ListItem from "./components/ListItem";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [allWines, setAllWines] = React.useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  async function getWines() {
    const newWines = await fetchWine();
    setAllWines(newWines);
    setIsLoading(false);
  }

  useEffect(() => {
    getWines();
  }, []);
  if (isLoading || allWines === null) {
    return <LoadingScreen />;
  }
  const filteredWines = allWines.filter((wine) => {
    return wine.wine.toLowerCase().match(query.toLowerCase());
  });
  return (
    <div className="app">
      <header className="header">
        Choose your favourite Wine{" "}
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="header__input"
          placeholder="Discover Wine"
        />
      </header>

      <main className="wineList">
        <List>
          {filteredWines?.map((wine) => {
            return (
              <ListItem key={wine.lwin} href={wine.href}>
                {wine.wine}
              </ListItem>
            );
          })}
        </List>
      </main>

      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
