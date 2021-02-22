import React, { useState } from "react";
import data from "./babyNamesData.json" 
import displayBabyNames from "./components/baby_name_card";
import "./App.css";

function App() {
  const babyNameData = data;

  // const [searchBar, setSearchBar] = useState("");

  // const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchBar(e.target.value);

  return (
    <div>
      {displayBabyNames(babyNameData)}
    </div>
  );
}

export default App;
