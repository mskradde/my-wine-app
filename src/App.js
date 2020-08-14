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
      <header>My Wine App</header>
      <main>
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

      <footer>Footer</footer>
    </div>
  );
}

export default App;
