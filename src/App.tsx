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


    // function toggleFavourites(name: string) {
    //     if (babyNameData.includes(findName(name)))
    // }


    function addFavourites(name: IBabyNames | undefined): void {
        if (name === undefined) {
            alert("There was an issue adding this name to your favourites, sorry");
        } else {
            const newFavourites = [...favourites]
            newFavourites.push(name);
            setFavourites(newFavourites);
        }
    }


    function findName(idNumber: number): IBabyNames | undefined {
        //look at function .find()
        return babyNameData.find((item) => item.id === idNumber);
    }

    console.log(favourites);


    function resultsToDisplay(searchTerm: string): IBabyNames[] {
        if (searchTerm !== "") {
            return babyNameData.filter(({name}) => name.toLowerCase().includes(searchTerm.toLowerCase()))
        } else {
            return babyNameData
        };
    };

    //return components rather than js functions
    return (
        <div className="outer-container">
            {displaySearchBar(searchBar, handleSearchChange)}
            <DisplayFavourites listOfFavourites={favourites} removeFavourite={() => console.log("unfavourite")}/>
            {displayBabyNames(resultsToDisplay(searchBar), handleClickFavourites)}
        </div>
    );
}

export default App;
