import React from "react";

function AddWines(props) {
  return (
    <>
      <header>
        <h2>Add a Wine you love!</h2>
      </header>

      <form>
        <input placeholder="Wine" />
        <input placeholder="Regions" />
        <input type="submit" value="add Wine" />
      </form>
    </>
  );
}

export default AddWines;
