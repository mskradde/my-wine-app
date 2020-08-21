import React, { useEffect } from "react";
import "./App.css";
import fetchWine from "./api/WineAPI";
import LoadingScreen from "./components/LoadingScreen";
import ResultScreen from "./pages/ResultScreen";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ResultScreen allWines={allWines} />
        </Route>
        <Route path="/add">Add Wines</Route>
      </Switch>
      <footer>
        <Link to="/">Home</Link>
        <Link to="/add">Add Wine</Link>
      </footer>
    </Router>
  );
}

export default App;
