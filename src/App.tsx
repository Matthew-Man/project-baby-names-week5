import React, { useState } from "react";
import data from "./babyNamesData.json" 
import displayBabyNames from "./components/baby_name_card";
import displaySearchBar from "./components/search_bar";
import IBabyNames from "./components/interface";
import "./App.css";

function App() {
    const babyNameData = data;
    const [searchBar, setSearchBar] = useState("");

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchBar(e.target.value);


    function resultsToDisplay(searchTerm: string): IBabyNames[] {
        if (searchTerm !== "") {
            return babyNameData.filter((name) => name.name.toLowerCase().includes(searchTerm.toLowerCase()))
        } else {
            return babyNameData
        };
    };

    return (
        <div className="outer-container">
            {displaySearchBar(searchBar, handleSearchChange)}
            {displayBabyNames(resultsToDisplay(searchBar))}
        </div>
    );
}

export default App;
