import IBabyNames from "./interface";
import "./favourites.css"
import displayBabyNames from "./baby_name_card";

export default function DisplayFavourites(props: {listOfFavourites: IBabyNames[], removeFavourite: (id: number) => void}): JSX.Element {
    const displayMyFavs = props.listOfFavourites.length === 0 ? (<p className="placeholder">Click some names below to add to your shortlist...</p>) : displayBabyNames(props.listOfFavourites, props.removeFavourite);

    return (
        <div className="favourites-container">
            <p id="titlefav">My Favourites:</p>
            {displayMyFavs}
        </div>
    )
}