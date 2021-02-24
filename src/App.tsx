import React, { useState } from "react";
import data from "./babyNamesData.json" 
import displayBabyNames from "./components/baby_name_card";
import displaySearchBar from "./components/search_bar";
import DisplayFavourites from "./components/favourites";
import IBabyNames from "./components/interface";
import "./App.css";


function App() {
    // Get data from local storage and convert to accepted data type
    const getLocalStorage = (): IBabyNames[] => {
        if (localStorage.length > 0) {
            let arrayOfId: number[] = Object.keys(localStorage).map(Number);
            const initalFavourites = arrayOfId.map(findName);
            return initalFavourites;
        } else {
            return emptyFavourites;
        }
    }

    const localStorage = window.localStorage;
    const emptyFavourites: IBabyNames[] = [];
    const [searchBar, setSearchBar] = useState("");
    const [filterGender, setFilterGender] = useState("none");
    const filteredBabyNameData = filterGenderData(filterGender);
    const [favourites, setFavourites] = useState(getLocalStorage());
    

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchBar(e.target.value);
    const handleClickFavourites = (id: number) => addFavourites(findName(id));
    const handleRemoveFavourites = (id: number) => removeFavourites(findName(id));
    const handleFilterChange = (filter: string) => setFilterGender(filter);


    console.log(localStorage)
    

    function filterGenderData(gender: string): IBabyNames[] {
        if (gender !== "none") {
            return data.filter(({sex}) => sex === gender)
        } else {
            return data
        }
    };


    function addFavourites(name: IBabyNames | undefined): void {
        if (name === undefined) {
            alert("There was an issue adding this name to your favourites, sorry");
        } else {
            const newFavourites = [...favourites]
            newFavourites.push(name);
            setFavourites(newFavourites);
            localStorage.setItem(name.id.toString(), name.name);
        }
    }
    
    
    function removeFavourites(name: IBabyNames): void {
            const newFavourites = [...favourites]
            const indexLocation = newFavourites.indexOf(name);
            newFavourites.splice(indexLocation, 1);
            setFavourites(newFavourites);
            localStorage.removeItem(name.id.toString());
    }
    

    function findName(idNumber: number): IBabyNames {
        const dataset = data.find((item) => item.id === idNumber);
        if (dataset === undefined) {
            //Should only build this is certain this error will not occur - but have considered the scenario
            throw new TypeError("This shouldn't happen - undefined error from id")
        }
        return dataset;
    }


    function sortNonFavData() {
        if (favourites.length !== 0) {
            return filteredBabyNameData.filter((item) => !favourites.includes(item));
        } else {
            return filteredBabyNameData
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
            {displaySearchBar(searchBar, handleSearchChange, handleFilterChange, filterGender)}
            <DisplayFavourites listOfFavourites={favourites} removeFavourite={handleRemoveFavourites}/>
            <hr id="top-margin"/>
            {displayBabyNames(resultsToDisplay(searchBar), handleClickFavourites)}
            <hr id="bottom-margin"/>
            <div className="credits">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
    );
}

export default App;
