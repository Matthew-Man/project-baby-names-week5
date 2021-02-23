import IBabyNames from "./interface";
import "./favourites.css"
import displayBabyNames from "./baby_name_card";

export default function DisplayFavourites(props: {listOfFavourites: IBabyNames[], removeFavourite: () => void}): JSX.Element {
    console.log(props.listOfFavourites)

    return (
        <div>
            {displayBabyNames(props.listOfFavourites, props.removeFavourite)}
        </div>
    )
}