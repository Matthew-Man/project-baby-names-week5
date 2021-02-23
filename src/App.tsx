import React, { useState } from "react";
import data from "./babyNamesData.json" 
import displayBabyNames from "./components/baby_name_card";
import displaySearchBar from "./components/search_bar";
import DisplayFavourites from "./components/favourites";
import IBabyNames from "./components/interface";
import "./App.css";

function App() {
    const babyNameData = data;
    const emptyFavourites: IBabyNames[] = []
    const [searchBar, setSearchBar] = useState("");
    const [favourites, setFavourites] = useState(emptyFavourites);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchBar(e.target.value);
    const handleClickFavourites = (id: number) => addFavourites(findName(id));
    const handleRemoveFavourites = (id: number) => removeFavourites(findName(id));


    function addFavourites(name: IBabyNames | undefined): void {
        if (name === undefined) {
            alert("There was an issue adding this name to your favourites, sorry");
        } else {
            const newFavourites = [...favourites]
            newFavourites.push(name);
            setFavourites(newFavourites);
        }
    }
    
    
    function removeFavourites(name: IBabyNames | undefined): void {
        if (name === undefined) {
            alert("There was an issue removing this name from your favourites, sorry");
        } else {
            const newFavourites = [...favourites]
            const indexLocation = newFavourites.indexOf(name);
            newFavourites.splice(indexLocation, 1);
            setFavourites(newFavourites);
        }
    }
    

    function findName(idNumber: number): IBabyNames | undefined {
        return babyNameData.find((item) => item.id === idNumber);
    }


    function sortNonFavData() {
        if (favourites.length !== 0) {
            return babyNameData.filter((item) => !favourites.includes(item));
        } else {
            return babyNameData
        }
    }


    function resultsToDisplay(searchTerm: string): IBabyNames[] {
        if (searchTerm !== "") {
            return sortNonFavData().filter(({name}) => name.toLowerCase().includes(searchTerm.toLowerCase()))
        } else {
            return sortNonFavData()
        };
    };

    //return components rather than js functions
    return (
        <div className="outer-container">
            {displaySearchBar(searchBar, handleSearchChange)}
            <DisplayFavourites listOfFavourites={favourites} removeFavourite={handleRemoveFavourites}/>
            <hr id="top-margin"/>
            {displayBabyNames(resultsToDisplay(searchBar), handleClickFavourites)}
            <hr id="bottom-margin"/>
        </div>
    );
}

export default App;
