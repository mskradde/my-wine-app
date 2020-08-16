import React, { useEffect } from "react";
import "./App.css";
import fetchWine from "./api/WineAPI";
import List from "./components/List";
import ListItem from "./components/ListItem";

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
      <header className="header">
        Choose your favourite Wine{" "}
        <input className="header__input" placeholder="Discover Wine" />
      </header>
      <main className="wineList">
        <List>
          {allWines?.map((wine) => {
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
