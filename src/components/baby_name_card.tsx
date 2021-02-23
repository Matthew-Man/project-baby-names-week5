import IBabyNames from "./interface";
import "./baby_name_card.css"


export default function displayBabyNames(allData: IBabyNames[], handleAddFavourite: (id: number) => void) {
    function createBabyCard(props: IBabyNames) {
        return (
            <BabyCard 
                id={props.id}
                name={props.name}
                sex={props.sex}
            />
        )
    }
    
    
    function BabyCard(props: IBabyNames): JSX.Element {
        const {id, name, sex} = props
        return (
            <div className={sex + " card"} key={id} onClick={() => handleAddFavourite(id)}><p>{name}</p></div>
        )
    }


    return (
        <div>
            <hr id="top-margin"/>
            <div className="flex-container">
                {allData.map((babyName) => createBabyCard(babyName))}
            </div>
            <br/>
            <hr id="bottom-margin"/>
        </div>
    )
}

