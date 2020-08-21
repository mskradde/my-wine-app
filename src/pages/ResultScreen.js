import React, { useEffect } from "react";
import List from "../components/List";
import ListItem from "../components/ListItem";
import getWines from "../api/WineAPI";

export default function ResultScreen({ allWines }) {
  const [query, setQuery] = React.useState("");
  const [wines, setWines] = React.useState(null);
  useEffect(() => {
    async function fetchWines() {
      const wines = await getWines();
      setWines(wines);
    }
    fetchWines();
  }, []);

  // const filteredWines = allWines.filter((wine) => {
  //   const thisWine = wine.wine.toLowerCase().match(query.toLowerCase());
  //   return thisWine;
  // });

  return (
    <div className="app">
      <header>
        <small>Hello,</small>
        <h2>Choose a wine you love</h2>

        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="header__input"
          placeholder="🔎 Search for your favorite wine"
        />
      </header>

      <main>
        <List>
          {wines?.map((wine) => {
            return (
              <ListItem key={wine.wine} className="wineList">
                {wine.wine}
                {wine.region}
              </ListItem>
            );
          })}
        </List>
      </main>
    </div>
  );
}
