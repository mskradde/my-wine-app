import React from "react";
import List from "./List";
import ListItem from "./ListItem";

export default function ResultScreen({ allWines }) {
  const [query, setQuery] = React.useState("");

  const filteredWines = allWines.filter((wine) => {
    const thisWine = wine.wine.toLowerCase().match(query.toLowerCase());
    return thisWine;
  });

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
          {filteredWines.map((wine) => {
            return (
              <ListItem key={wine.lwin} href={wine.href} className="wineList">
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
